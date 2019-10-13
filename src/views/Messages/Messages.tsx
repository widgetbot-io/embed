import * as React from "react";
import { useMemo } from "react";
import { useMessages } from "@hooks";
import { formatError, groupMessages } from "./utils";
import ErrorAhoy from "@ui/Overlays/ErrorAhoy";
import { Info, Loading, NoMessages } from "@ui/Overlays";
import { MessageList, MessagesWrapper, Scroller } from "./elements";
import {
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader
} from "react-virtualized";
import { observer, useObservable } from "mobx-react-lite";
import Message from "@ui/Message";
import { useCallbackReference } from "src/hooks/useCallbackReference";

type MessagesProps = {
  guild: string;
  channel: string;
};

export const Messages = observer(({ guild, channel }: MessagesProps) => {
  const { messages, error, ready, stale, fetchMore } = useMessages(
    channel
  );
  const groupedMessages = groupMessages(messages);
  const scroller = useObservable({
    isLoadingMore: false,
    readyToLoadMore: false,
    width: null,
    count: -1,
    scrollToIndex: -1
  });

  const getKey = (rowIndex: number) => {
    const group = groupedMessages[rowIndex];
    const ids = group ? group.map(m => m.id).join(":") : "placeholder";

    // Given the following data points, the group should be identical
    const identifier = [guild, channel, ids, scroller.width];

    return identifier.join("$");
  };

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    keyMapper: getKey
  });

  if (error) return <ErrorAhoy message={formatError(error)} />;
  if (!ready) return <Loading />;

  if (!groupedMessages.length)
    return (
      <NoMessages className="no-messages">
        <Info>No messages to be seen here!</Info>
      </NoMessages>
    );

  const index =
    scroller.scrollToIndex < 0
      ? groupedMessages.length + scroller.scrollToIndex
      : scroller.scrollToIndex;

  return (
    <MessagesWrapper stale={stale} className="messages">
      <MessageList>
        {({ width, height }) => {
          scroller.width = width;

          return (
            <InfiniteLoader
              isRowLoaded={({ index }) => {
                const loadMore = [0].includes(index) ;

                if (loadMore) {
                  if (scroller.readyToLoadMore) return false;
                  scroller.readyToLoadMore = true;
                }

                return true;
              }}
              loadMoreRows={async () => {
                if (scroller.isLoadingMore) return;

                scroller.isLoadingMore = true;
                await fetchMore();
                scroller.isLoadingMore = false;

                // Clear the cache for the message at the top
                // could be a message added into its group
                cache.clear(2, 0);
              }}
              rowCount={Infinity}
              threshold={1}
            >
              {({ onRowsRendered, registerChild }) => {
                return (
                    <Scroller
                        width={width}
                        height={height}
                        onRowsRendered={(data) => {
                          if (groupedMessages.length !== scroller.count) {
                            if (scroller.count !== -1) {
                              scroller.scrollToIndex = groupedMessages.length - scroller.count + 1
                            }
                            scroller.count = groupedMessages.length
                          }

                          onRowsRendered(data)
                        }}
                        listRef={registerChild}
                        deferredMeasurementCache={cache}
                        rowHeight={cache.rowHeight}
                        rowRenderer={({ index, key, style, parent }) =>
                            groupedMessages[index] ? (
                                <CellMeasurer
                                    key={key}
                                    cache={cache}
                                    parent={parent}
                                    rowIndex={index}
                                >
                                  <Message
                                      style={style}
                                      messages={groupedMessages[index]}
                                  />
                                </CellMeasurer>
                            ) : null
                        }
                        rowCount={groupedMessages.length + 1}
                        scrollToIndex={index}
                        scrollToAlignment="start"
                        overscanRowCount={0}
                    />
                )
              }}
            </InfiniteLoader>
          );
        }}
      </MessageList>
      {stale && <Loading />}
    </MessagesWrapper>
  );
});

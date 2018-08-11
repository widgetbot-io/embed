import MESSAGES from '@queries/Messages.graphql'
import OPEN_MODAL from '@queries/OpenModal.graphql'
import { Channel, ChannelVariables } from '@queries/__generated__/Channel'
import {
  Messages,
  MessagesVariables,
  Messages_server_channel_messages
} from '@queries/__generated__/Messages'
import { OpenModal, OpenModalVariables } from '@queries/__generated__/OpenModal'
import Header, { Name, Topic } from '@ui/Header'
import { Join, Stretch } from '@ui/Header/elements'
import Message from '@ui/Message'
import { Info, Loading, NoMessages } from '@ui/Overlays'
import ErrorAhoy from '@ui/Overlays/ErrorAhoy'
import Wrapper from '@ui/Wrapper'
import { ApolloError } from 'apollo-client'
import autobind from 'autobind-decorator'
import produce from 'immer'
import Tooltip from 'rc-tooltip'
import * as React from 'react'
import { ChildProps, graphql, Mutation, Query } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader
} from 'react-virtualized'
import CHANNEL from './Channel.graphql'
import { Scroller } from './elements'
import Group from './group'
import { formatError } from './util'
import { Trans } from '@lingui/react'

const defaultInvite = 'https://discord.gg/mpMQCuj'

type InputProps = RouteComponentProps<{
  server: string
  channel: string
}>

interface Props {
  error: ApolloError
  loading: boolean
  ready: boolean

  fetchMessages(): Promise<void>

  messages: Messages_server_channel_messages[]
  groupedMessages: Messages_server_channel_messages[][]
}

const withMessages = graphql<InputProps, Messages, MessagesVariables, Props>(
  MESSAGES,
  {
    options({ match }) {
      const { server, channel } = match.params

      return {
        fetchPolicy: 'cache-and-network',
        variables: {
          server,
          channel
        }
      }
    },
    props({ data, ownProps }) {
      const { server, channel } = ownProps.match.params

      const messages =
        (data && data.server && data.server.channel.messages) || []

      return {
        loading: data.loading,
        error: data.error,

        ready:
          !data.loading ||
          (data && data.server && data.server.channel.id === channel),

        async fetchMessages() {
          const [firstMessage] = messages
          if (!firstMessage) return

          const before = firstMessage.id
          console.log('getting before', before)

          await data.fetchMore({
            query: MESSAGES,
            variables: { server, channel },
            updateQuery: (prev, options) =>
              produce(prev, draftState => {
                console.log(prev)
                return prev
              })
          })
        },

        messages,
        groupedMessages: Group(messages)
      }
    }
  }
)

class MessagesView extends React.PureComponent<
  ChildProps<InputProps & Props, Messages>
> {
  state = {
    scrollToIndex: -1
  }

  private cache = new CellMeasurerCache({
    fixedWidth: true
  })

  @autobind
  renderRow({ index, key, style, parent }) {
    const { groupedMessages } = this.props

    return groupedMessages[index] ? (
      <CellMeasurer
        key={key}
        cache={this.cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <Message style={style} messages={groupedMessages[index]} />
      </CellMeasurer>
    ) : null
  }

  @autobind
  async loadMoreRows() {
    const { loading } = this.props

    if (!loading) {
      await this.props.fetchMessages()
    }
  }

  @autobind
  isRowLoaded({ index }) {
    return index > 0
  }

  @autobind
  header() {
    const { server, channel } = this.props.match.params

    return (
      <Query<Channel, ChannelVariables>
        query={CHANNEL}
        variables={{ server, channel }}
      >
        {({ loading, error, data }) => {
          const name = loading || error ? '' : data.server.channel.name
          const topic = loading || error ? null : data.server.channel.topic

          return (
            <Header>
              <Stretch>
                <Name>{name}</Name>
                {topic && (
                  <Mutation<OpenModal, OpenModalVariables>
                    mutation={OPEN_MODAL}
                  >
                    {openModal => (
                      <Topic
                        onClick={() => {
                          openModal({
                            variables: { type: 'topic', data: topic }
                          })
                        }}
                        className="topic"
                      >
                        {topic}
                      </Topic>
                    )}
                  </Mutation>
                )}
              </Stretch>
              <Tooltip placement="bottom" overlay="Open in Discord app">
                <Join
                  className="join"
                  href={defaultInvite}
                  target="_blank"
                  // TODO: Fix join button
                  // onClick={this.join}
                >
                  <Trans id="Header.joinDiscord">Join on Discord</Trans>
                </Join>
              </Tooltip>
            </Header>
          )
        }}
      </Query>
    )
  }

  @autobind
  view() {
    const { ready, groupedMessages } = this.props

    if (!ready) return <Loading />
    if (!groupedMessages.length)
      return (
        <NoMessages className="no-messages">
          <Info>No messages to be seen here</Info>
        </NoMessages>
      )

    // TODO: Super inefficient
    // Clear the CellMeasurer cache on updates
    this.cache.clearAll()

    return (
      <AutoSizer>
        {({ width, height }) => (
          <InfiniteLoader
            isRowLoaded={this.isRowLoaded}
            loadMoreRows={this.loadMoreRows}
            rowCount={groupedMessages.length}
          >
            {({ onRowsRendered, registerChild }) => (
              <Scroller
                width={width}
                height={height - 47}
                onRowsRendered={onRowsRendered}
                listRef={registerChild}
                deferredMeasurementCache={this.cache}
                rowHeight={this.cache.rowHeight}
                rowRenderer={this.renderRow}
                rowCount={groupedMessages.length}
                scrollToIndex={this.state.scrollToIndex}
                scrollToAlignment="start"
                overscanRowCount={3}
              />
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    )
  }

  render() {
    console.log(this.props.loading)
    const { error } = this.props

    if (error) return <ErrorAhoy message={formatError(error)} />

    return (
      <Wrapper>
        <this.header />
        <this.view />
      </Wrapper>
    )

    // return content ? (
    //   <Wrapper>
    //     {/*header*/}
    //     {content}
    //     {/*channel && channel.permissions.SEND_MESSAGES && <Chat />*/}
    //   </Wrapper>
    // ) : (
    //   <ErrorAhoy />
    // )
  }

  // @autobind
  // async join(event) {
  //   const { channel } = this.props.match.params
  //   const { window, document } = self.open()

  //   event.preventDefault()

  //   document.body.style.backgroundColor = '#36393F'
  //   document.title = `Join Discord server`

  //   // Attempt to get an invite for the specified channel
  //   // if it fails, fallback to one on a random channel
  //   try {
  //     const invite = await fetchInvite(channel)
  //     document.location.href = invite
  //   } catch (e) {
  //     window.close()
  //     addNotification({
  //       level: 'error',
  //       title: 'Unable to Join',
  //       message:
  //         'WidgetBot does not have permissions to invite you to this server...',
  //       autoDismiss: 5000
  //     })
  //   }
  // }

  // /**
  //  * Captures scroll positions from channels, so when
  //  * you switch channels, your position is retained
  //  */
  // positions = new Map() as Map<string, number>
  // position = -1
  // scrollable

  // componentWillReceiveProps(nextProps) {
  //   const prevMatch = this.props.match.params
  //   const nextMatch = nextProps.match.params

  //   if (prevMatch.channel !== nextMatch.channel) {
  //     if (this.scrollable) {
  //       // Record scroll position of the current channel
  //       this.positions.set(prevMatch.channel, this.scrollable.getScrollTop())

  //       // Extract the last scroll position of the next channel
  //       if (this.positions.has(nextMatch.channel)) {
  //         this.position = this.positions.get(nextMatch.channel)
  //       } else {
  //         this.position = -1
  //       }
  //     }
  //   }
  // }

  // scroll(ref) {
  //   if (!ref) return
  //   this.scrollable = ref

  //   if (this.scrollable) {
  //     if (this.position === -1) {
  //       this.scrollable.scrollToBottom()
  //     } else {
  //       this.scrollable.scrollTop(this.position)
  //     }
  //   }
  // }
}

export default withMessages(MessagesView)

import * as React from "react";
import Wrapper from "@ui/Wrapper";
import { Header } from "./Header";
import { RouteComponentProps } from "react-router-dom";
import { Chat } from "@ui/Chat";
import { Messages } from "./Messages";
import { Loading } from "@ui/Overlays";
import GET_CHANNEL_NAME from "@ui/Chat/ChannelName.graphql";
import { useQuery } from "react-apollo-hooks";
import { useRouter } from "@hooks";
import { NSFWScreen } from "./elements";

type MessageProps = RouteComponentProps<{
  guild: string;
  channel: string;
}>;

export const MessagesView = ({ match }: MessageProps) => {
  const { channel, guild } = useRouter();
  const { data, error, loading } = useQuery(GET_CHANNEL_NAME, {
    variables: { channel }
  });
  if (loading) return <Loading />;
  let [hasAgreed, agree] = React.useState(!data.channel.nsfw);
  return (
    <Wrapper absolute={hasAgreed ? true : false}>
      <React.Suspense fallback={<Header.Fallback />}>
        <Header channel={match.params.channel} guild={match.params.guild} />
      </React.Suspense>

      {hasAgreed ? (
        <React.Fragment>
          <React.Suspense fallback={<Loading />}>
            <Messages
              guild={match.params.guild}
              channel={match.params.channel}
            />
          </React.Suspense>
          <Chat />
        </React.Fragment>
      ) : (
        <NSFWScreen>
          <h1> no kids allowed </h1>
          <button onClick={() => agree(true)}>OK</button>
        </NSFWScreen>
      )}
    </Wrapper>
  );
};

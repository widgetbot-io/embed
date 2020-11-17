import produce from "immer";
import { MESSAGES } from ".";
import { useQuery, useSubscription } from "react-apollo-hooks";

/**
 * Fetches the messages for a channel
 */
export const useMessages = (channel: string) => {
  const query = useQuery(MESSAGES, {
    variables: { channel },
    fetchPolicy: 'network-only'
  });

  const ready =
    (query.data && query.data.channel && query.data.channel.id === channel) ||
    false;

  const messages = ready ? query.data.channel.messages : [];

  async function fetchMore(options?: {
    around?: string;
    after?: string;
    before?: string;
    limit?: number;
  }) {
    if(!channel) return;
    if (!options) {
      const [firstMessage] = messages;
      if (!firstMessage) return;

      options = { before: firstMessage.id };
    }

    await query.fetchMore({
      query: MESSAGES,
      variables: { channel, ...options },
      updateQuery: (prev, { fetchMoreResult }) =>
        produce(prev, draftState => {
          draftState.channel.messages = [
            ...fetchMoreResult.channel.messages,
            ...draftState.channel.messages
          ];
        })
    })
  }

  // useSubscription(NEW_MESSAGES, {
  //   variables: { channel },
  //   onSubscriptionData({ subscriptionData }) {
  //     query.updateQuery(prev =>
  //       produce(prev, ({ channel }) => {
  //         channel.messages.push(subscriptionData.data.message);
  //       })
  //     )}
  // });
  //
  // useSubscription(UPDATED_MESSAGES, {
  //   variables: { channel },
  //   onSubscriptionData({ subscriptionData }) {
  //     query.updateQuery(prev =>
  //       produce(prev, ({ channel: { messages } }) => {
  //         const message = subscriptionData.data.messageUpdate;
  //         const index = messages.findIndex(m => m.id === message.id);
  //
  //         if (index > -1) {
  //           messages[index] = message;
  //         }
  //       })
  //     );
  //   }
  // });
  //
  // useSubscription(DELETED_MESSAGES, {
  //   variables: { channel },
  //   onSubscriptionData({ subscriptionData }) {
  //     query.updateQuery(prev =>
  //       produce(prev, ({ channel }) => {
  //         let deletedMessages = subscriptionData.data.messageDelete;
  //
  //         if (!deletedMessages[0]) deletedMessages = [deletedMessages];
  //         channel.messages = channel.messages.filter(
  //           message => !deletedMessages.find(m => m.id === message.id)
  //         );
  //       })
  //     );
  //   }
  // });

  return <any>{
    ready,
    messages,
    fetchMore,
    error: query.error,
    // @ts-ignore
    stale: query.stale
  };
};

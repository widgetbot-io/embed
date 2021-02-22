import produce from "immer";
import { MESSAGES, NEW_MESSAGE, MESSAGE_UPDATED, MESSAGE_DELETED, MESSAGES_BULK_DELETED } from ".";
import { useQuery, useSubscription } from "react-apollo-hooks";
import { Messages_channel, Messages_channel_messages } from "@generated";

/**
 * Fetches the messages for a channel
 */
export const useMessages = (channel: string, guild: string) => {
  const query = useQuery(MESSAGES, {
    variables: { channel },
    fetchPolicy: 'network-only'
  });

  const ready =
    (query.data?.channel?.id === channel) ||
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

  useSubscription(NEW_MESSAGE, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel: { messages } }: { channel: Messages_channel }) => {
          const message = subscriptionData.data.message as Messages_channel_messages
          if (!messages.find(m => m.id === message.id)) messages.push(message);
        })
      )}
  });

  useSubscription(MESSAGE_UPDATED, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel: { messages } }: { channel: Messages_channel }) => {
          const message = subscriptionData.data.messageUpdate as Messages_channel_messages
          const index = messages.findIndex(m => m.id === message.id);

          if (index > -1) {
            const updatedProps = Object.fromEntries(Object.entries(message).filter(([_, v]) => v !== null))
            delete updatedProps.__typename 

            Object.assign(messages[index], updatedProps)
          }
        })
      );
    }
  });
  
  useSubscription(MESSAGE_DELETED, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel: { messages } }: { channel: Messages_channel }) => {
          const { id } = subscriptionData.data.messageDelete as { id: string }
          const index = messages.findIndex(m => m.id === id)

          if (index > -1) messages.splice(index, 1)
        })
      );
    }
  });

  useSubscription(MESSAGES_BULK_DELETED, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel }: { channel: Messages_channel }) => {
          const { ids } = subscriptionData.data.messageDeleteBulk as { ids: string[] }
  
          channel.messages = channel.messages.filter(
            message => !ids.includes(message.id)
          );
        })
      );
    }
  });

  return <any>{
    ready,
    messages,
    fetchMore,
    error: query.error,
    // @ts-ignore
    stale: query.stale
  };
};

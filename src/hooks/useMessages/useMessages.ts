import produce from "immer";
import { MESSAGES, NEW_MESSAGE, MESSAGE_UPDATED, MESSAGE_DELETED, MESSAGES_BULK_DELETED } from ".";
import { OnSubscriptionDataOptions, useQuery, useSubscription } from "react-apollo-hooks";
import { MessageDeleted, MessagesBulkDeleted, Messages_channel, Messages_channel_messages, MessageUpdated, NewMessage, UpdatedMessage } from "@generated";

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

  useSubscription<NewMessage>(NEW_MESSAGE, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel: { messages } }: { channel: Messages_channel }) => {
          const message = subscriptionData.data.message as Messages_channel_messages
          message.author.color = messages.find(m => m.author.id === message.author.id)?.author.color || 0xffffff
          if (!messages.find(m => m.id === message.id)) messages.push(message);
        })
      )}
  });

  useSubscription<MessageUpdated>(MESSAGE_UPDATED, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel: { messages } }: { channel: Messages_channel }) => {
          const message = subscriptionData.data.messageUpdate
          const index = messages.findIndex(m => m.id === message.id);

          if (index > -1) {
            const updatedProps = Object.fromEntries(Object.entries(message).filter(([_, v]) => v !== null)) as Partial<Messages_channel_messages>
            updatedProps.author.color = messages.find(m => m.author.id === message.author.id)?.author.color || 0xffffff
            delete updatedProps.__typename

            Object.assign(messages[index], updatedProps)
          }
        })
      );
    }
  });
  
  useSubscription<MessageDeleted>(MESSAGE_DELETED, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel: { messages } }: { channel: Messages_channel }) => {
          const { id } = subscriptionData.data.messageDelete
          const index = messages.findIndex(m => m.id === id)

          if (index > -1) messages.splice(index, 1)
        })
      );
    }
  });

  useSubscription<MessagesBulkDeleted>(MESSAGES_BULK_DELETED, {
    variables: { channel, guild },
    onSubscriptionData({ subscriptionData }) {
      query.updateQuery(prev =>
        produce(prev, ({ channel }: { channel: Messages_channel }) => {
          const { ids } = subscriptionData.data.messageDeleteBulk
  
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

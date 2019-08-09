import { useMutation } from 'react-apollo-hooks'
import SEND_MESSAGE from './SendMessage.graphql'
import { MESSAGES } from '../useMessages'
import { useRouter } from '@hooks'
import gql from "graphql-tag";

export const useSendMessage = () => {
  const { channel } = useRouter();

  return async (content: string) => {
    await useMutation(gql`
        mutation SendMessage($channel: String!, $content: String!) {
            sendMessage(channel: $channel, content: $content) {
                id
                content
            }
        }
    `, {
      variables: { channel, content: 'aaaa' }
    });
  };

  /* return async (content: string) => TODO: Fix message sending
    await sendMessage({
      variables: { channel, content },
      optimisticResponse: {
        __typename: 'Mutation',
        sendMessage: {
          __typename: 'TextMessage',
          id: Math.random(),
          createdAt: +new Date(),
          editedAt: null,
          content,
          // TODO: Get the guests info to provide the proper optimistic response
          author: {
            id: '',
            username: '',
            discriminator: '0000',
            avatarURL: null,
            __typename: 'GuestMember'
          },
          reactions: [],
          attachments: [],
          embeds: []
        }
      },
      update: (proxy, { data: { sendMessage } }) => {
        const data = proxy.readQuery<any>({
          query: MESSAGES,
          variables: { channel }
        })
        data.channel.messages.push(sendMessage)
        proxy.writeQuery({
          query: MESSAGES,
          variables: { channel },
          data
        })
      }
    }) */
}

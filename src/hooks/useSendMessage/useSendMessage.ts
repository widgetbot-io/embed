import { useMutation } from 'react-apollo-hooks'
import SEND_MESSAGE from './SendMessage.graphql'
import { MESSAGES } from '../useMessages'
import { useRouter } from '@hooks'
import { Messages, SendMessage } from '@generated';
import { addNotification } from "notify";
import { MessageType } from '@generated/globalTypes';
import { Util } from '@lib/Util';
import { authStore } from '@store';

export const useSendMessage = () => {
  const { channel } = useRouter()
  const sendMessage = useMutation<SendMessage>(SEND_MESSAGE);

  return async (content: string) =>
    await sendMessage({
      variables: { channel, content },
      optimisticResponse: {
        __typename: 'Mutation',
        sendMessage: {
          __typename: 'Message',
          id: Util.generateSnowflake(),
          content: content,
          type: MessageType.Default,
          flags: 1 << 4, // reusing flag for optimistic messages
          createdAt: +new Date(),
          editedAt: null,
          isGuest: true,
          author: {
            __typename: 'User',
            avatar: 'avatar' in authStore.user && authStore.user.avatar,
            bot: true,
            color: 0,
            discrim: '0000',
            id: '_id' in authStore.user ? authStore.user._id : Util.generateSnowflake(),
            flags: 0,
            name: authStore.user.username,
          },
          reactions: [],
          attachments: [],
          stickers: [],
          messageReference: null,
          application: null,
          embeds: [],
          mentions: []
        }
      } as SendMessage, update: (store, { data: { sendMessage: newMessage } }) => {
        const data = store.readQuery<Messages>({ query: MESSAGES, variables: {channel} })

        newMessage.isGuest = true

        if (!data.channel.messages.find(m => m.id === newMessage.id))
          data.channel.messages.push(newMessage)

        if (!(newMessage.flags & 1 << 4)) {
          const optimisticIndex = data.channel.messages.findIndex(m => m.content === newMessage.content && m.flags & 1 << 4)
          if (optimisticIndex > -1) data.channel.messages.splice(optimisticIndex, 1)
        }
        
        store.writeQuery({query: MESSAGES, variables: {channel}, data})
      }
    }).catch(error => addNotification({
      level: 'error',
      title: 'Error sending message',
      message: error.toString(),
      autoDismiss: 0
    }))
}

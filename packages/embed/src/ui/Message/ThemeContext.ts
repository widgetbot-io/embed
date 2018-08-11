import { Messages_server_channel_messages } from '@queries/__generated__/Messages'
import styled, { ThemedReactEmotionInterface } from 'react-emotion'
import { Theme } from '@lib/emotion'

export * from '@lib/emotion'

interface Context extends Theme {
  message: Messages_server_channel_messages
}
export default styled as ThemedReactEmotionInterface<Context>

import { Messages_channel_TextChannel_messages } from '@generated'
import styled, { ThemedReactEmotionInterface } from 'react-emotion'
import { Theme } from '@lib/emotion'

export * from '@lib/emotion'

interface Context extends Theme {
  message: Messages_channel_TextChannel_messages
}
export default styled as ThemedReactEmotionInterface<Context>

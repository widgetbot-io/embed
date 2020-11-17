import { Message } from '@generated'
import styled, { ThemedReactEmotionInterface } from 'react-emotion'
import { Theme } from '@lib/emotion'

export * from '@lib/emotion'

interface Context extends Theme {
  message: Message
}
export default styled as ThemedReactEmotionInterface<Context>

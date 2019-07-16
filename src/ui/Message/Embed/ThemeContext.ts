import { Theme } from '@lib/emotion'
import styled, { ThemedReactEmotionInterface } from 'react-emotion'

export * from '@lib/emotion'

interface Context extends Theme {
  embed: /*Embed*/ any // TODO: FIX
}
export default styled as ThemedReactEmotionInterface<Context>

import { Theme } from '@lib/emotion'
import styled, { ThemedReactEmotionInterface } from 'react-emotion'

export * from '@lib/emotion'

interface Context extends Theme {
  modal: /* Modal */ any // TODO: Typings
}
export default styled as ThemedReactEmotionInterface<Context>

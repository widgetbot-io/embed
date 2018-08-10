import createEmotionStyled from 'create-emotion-styled'
import * as React from 'react'

import Theme from '../../types/theme'
import create from './emotion'
import Emotion, { ThemedReactEmotionInterface } from './types'

export const createEmotion = (styleInjection: HTMLElement) => {
  const emotion = create(styleInjection)
  const styled = (createEmotionStyled(
    emotion,
    React
  ) as any) as ThemedReactEmotionInterface<Theme>
  return { emotion, styled }
}

export const { Provider, Consumer } = React.createContext(null)

export interface ThemedEmotion extends Emotion {
  styled: ThemedReactEmotionInterface<Theme>
}

// This is a wrapper that uses React's context API
// to dynamically get the correct emotion instance
// (and correct shadow DOM).
export function ShadowStyles<T>(component: (emotion: ThemedEmotion) => T): T {
  return (props => {
    let Component

    return (
      <Consumer>
        {({ emotion, styled }) => {
          if (!Component) {
            Component = component({ styled, ...emotion })
          }

          return <Component {...props} />
        }}
      </Consumer>
    )
  }) as any
}

const wrap = <T extends keyof ThemedEmotion>(
  func: T
): ThemedEmotion[T] => tag => (...args) => props => {
  let Component

  return (
    <Consumer>
      {({ emotion, styled }) => {
        if (!Component) {
          Component = { styled, ...emotion }[func](tag)(...args)
        }

        return <Component {...props} />
      }}
    </Consumer>
  )
}

const styled = wrap('styled')
export default styled

export * from './emotion'

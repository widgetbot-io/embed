import Color from 'color'
import styled, { ThemedReactEmotionInterface } from 'react-emotion'

import { ParsedUrl } from '../../types'
import { Theme_guild_theme } from '../../__generated__'

export * from 'react-emotion'

export interface Theme extends Theme_guild_theme {
  colors: {
    __typename: 'ThemeColors'
    _primary: Color
    _accent: Color
    _background: Color

    primary: string
    accent: string
    background: string
  }
  url: ParsedUrl
}

export default styled as ThemedReactEmotionInterface<Theme>

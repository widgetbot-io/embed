import Color from 'color'
import styled, { ThemedReactEmotionInterface } from 'react-emotion'

import { Theme_server_theme } from '../../app/__generated__/Theme'
import { ParsedUrl } from '../../types/url'

export * from 'react-emotion'

export interface Theme extends Theme_server_theme {
  colors: {
    __typename: 'Colors'
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

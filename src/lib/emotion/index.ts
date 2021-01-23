import Color from 'color'
import styled, { CreateStyled } from '@emotion/styled'

import { ParsedUrl } from '../../types/url'
import { Settings_guild_settings_theme } from '@generated'

export * from '@emotion/core'

export interface Theme extends Settings_guild_settings_theme {
  readonly: boolean,
  guestMode: boolean,
  singleChannel?: string,
  colors: {
    __typename: 'ThemeColorSettings'
    _primary: Color
    _accent: Color
    _background: Color

    primary: string
    accent: string
    background: string
  }
  url: ParsedUrl
}

export default styled as CreateStyled<Theme>

import Color from 'color'
import $Channel from '@ui/shared/Channel'
import $Member from '@ui/shared/Member'
import $Role from '@ui/shared/Role'
import styled, { css } from '@lib/emotion'
import { Message_mentions } from '@generated'

interface Props {
  color?: string
  inline?: boolean
  data?: Message_mentions
}

const base = (inline: boolean, color: string, clickable: boolean) => css`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 30px;

  ${inline
    ? css`
        color: ${color};
        &:hover {
          ${clickable && 'text-decoration: underline;'}
        }
      `
    : css`
        padding: 0 6px;
        background-color: ${Color(color)
          .fade(0.9)
          .string()};
        color: ${color} !important;
        text-decoration: none !important;

        &:hover {
          ${clickable ?
            css`
              background-color: ${Color(color)
                .fade(0.3)
                .string()};
              color: rgba(255, 255, 255, 0.95) !important;
            `
            : 'cursor: text'
          }
        }
      `};
`

export const Mention = styled($Member)<Props>`
  ${({ theme, color, inline }) => base(inline, color || theme.colors.accent, false)};
`

export const Channel = styled($Channel)<Props>`
  ${({ theme, inline }) => base(inline, theme.colors.accent, true)};
`

interface RoleProps extends Props {
  everyone?: boolean
  data?: Message_mentions
}
export const Role = styled($Role)<RoleProps>`
  ${({ theme, color, inline }) => base(inline, color || theme.colors.accent, false)};
`;

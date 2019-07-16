import styled, { css } from '@lib/emotion'
import { Twemoji } from '@ui/shared/Emoji/emoji'

interface Props {
  selected: boolean
}

export const Suggestion = styled('li')<Props>`
  display: flex;
  cursor: pointer;
  height: 32px;
  margin: 0 8px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 3px;
  padding: 8px;
  ${({ selected, theme }) =>
    selected
      ? css`
          background-color: ${theme.colors._primary.fade(0.95).string()};
        `
      : null};
`

export const Icon = styled(Twemoji)`
  width: 16px;
  height: 16px;
  text-align: center;
  flex-shrink: 0;
`

export const Name = styled('div')`
  margin-left: 10px;
  flex-grow: 1;
  flex-shrink: 0;
`

export const Info = styled('div')`
  overflow: hidden;
  margin-left: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors._primary.fade(0.75).string()};
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`

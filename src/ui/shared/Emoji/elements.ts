import styled, { css } from '@lib/emotion'

export const Base = css`
  object-fit: contain;
  -webkit-user-drag: none;
  width: 22px;
  height: 22px;
  vertical-align: -0.4em;
`

export const Emote = styled('img')`
  ${Base};
`

import styled from '@lib/emotion'

export const Link = styled('a')`
  & code {
    color: inherit;
  }
`

export const Edited = styled('span')`
  font-size: 0.625rem;
  line-height: 0.625rem;
  margin-left: 3px;
  opacity: 0.3;
`

export { Code } from './code'
export { default as Highlighter } from './code/loader'
export { Channel, Mention, Role } from './mentions'

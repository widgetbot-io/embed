import styled from '@lib/emotion'

import { Info } from '../elements'

interface IMessage {
  length: number
}
export const Message = styled(Info)<IMessage>`
  user-select: initial;
  color: #b94f5c;
  opacity: 0.6;

  font-size: ${({ length }) =>
    length > 800
      ? 10
      : length > 600
        ? 13
        : length > 500
          ? 15
          : length > 200
            ? 16
            : 19}px;
`

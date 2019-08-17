import styled from '@lib/emotion'
import { Twemoji } from '@ui/shared/Emoji/emoji'

export const Root = styled('div')`
  margin: 9px 12px;
`

export const Emoji = styled(Twemoji)`
  display: block;
  cursor: pointer;
  opacity: 0.3;
  filter: grayscale(100%);
  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out,
    filter 0.1s ease-in-out;

  &:hover {
    opacity: 1;
    filter: initial;
    transform: scale(1.3);
  }
`

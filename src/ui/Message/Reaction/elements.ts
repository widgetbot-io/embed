import styled from '@lib/emotion'
import { Twemoji } from '@ui/shared/Emoji/emoji'

export const Root = styled('div')`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: .5rem;
  margin-right: .25rem;
  margin-bottom: .25rem;
  padding: .125rem .375rem;
  user-select: none;
`

export const Emoji = styled(Twemoji)`
  height: 1rem !important;
  width: 1rem !important;
  margin: 3px 0 !important;
  min-height: auto;
  min-width: auto;
  -webkit-user-drag: none;
  object-fit: contain;
  vertical-align: -0.4em;
`

export const Count = styled('span')`
  color: ${({ theme }) => theme.colors._primary.fade(0.33).string()};
  min-width: 9px;
  font-size: 0.875rem;
  font-weight: 500;
  height: 21px;
  letter-spacing: 0.00813rem;
  line-height: 1.3125rem;
  margin-left: 10px;
  text-align: center;
  vertical-align: top;
`

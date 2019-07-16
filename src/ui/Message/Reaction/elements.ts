import styled from '@lib/emotion'
import { Twemoji } from '@ui/shared/Emoji/emoji'

export const Root = styled('div')`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors._primary.fade(0.96).string()};
  cursor: pointer;
  border-radius: 3px;
  margin-right: 2px;
  padding: 0 7px;
  user-select: none;
  height: 22px;
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
  color: ${({ theme }) => theme.colors._primary.fade(0.7).string()};
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

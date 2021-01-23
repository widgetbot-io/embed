import styled from '@emotion/styled'
import * as Modal from '@ui/Modal'
import { Twemoji } from '@ui/shared/Emoji/emoji'

export const Root = styled(Modal.Content)`
  padding: 0;
  text-align: center;
  user-select: none;
  width: auto;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
`

export const Top = styled('div')`
  padding: 10px 10px 10px 20px;
  display: flex;
`

export const Title = styled('h4')`
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  display: flex;
  flex-grow: 1;
`

export const Emoji = styled(Twemoji)`
  width: 18px !important;
  height: 100% !important;
  margin-right: 2px !important;
  vertical-align: top;
`

export const Close = styled(Modal.Close)`
  position: relative;
`

export const Body = styled('div')`
  margin: 0 20px 20px;
  user-select: text;
  text-align: left;
  display: block;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors._primary.fade(0.173).string()};
  * {
    color: inherit;
  }
`

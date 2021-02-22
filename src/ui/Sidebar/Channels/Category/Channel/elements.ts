import {ChannelLink, Hash, News, Store, NSFW, NSFWNews, Rules} from '@ui/shared/Channel'
import styled, { css, keyframes } from '@lib/emotion'
import { Twemoji } from '@ui/shared/Emoji/emoji'
import Item from '@ui/SelectItem'

const fade = i => keyframes`
  from {
    transform: translateX(-${i * 7}px);
    opacity: 0;
  }
  to {
    transform: initial;
    opacity: 1;
  }
`

interface Props {
  selected: boolean
  unread: boolean
  order: number
}

const Link = Item.withComponent(ChannelLink)
export const Root = styled(Link)<Props>`
  color: ${({ unread, theme }) =>
    unread && `${theme.colors._primary.fade(0.1).string()} !important`};
  /* animation: ${({ order }) => fade(order)} 0.5s ease; */

  &:hover {
    background-color: ${({ selected, theme }) =>
      !selected && theme.colors._primary.fade(0.96).string()};
    color: ${({ theme, selected }) =>
      !selected && theme.colors._primary.fade(0.3).string()};
  }

  ${({ unread, theme }) =>
    unread &&
    css`
      &::before {
        position: absolute;
        display: block;
        content: '';

        left: -8px;
        top: 50%;
        transform: translateY(-50%);

        height: 8px;
        width: 4px;
        background-color: ${theme.colors._primary.fade(0.4).string()};
        border-radius: 0 6px 6px 0;
      }
    `}
`
const icon = (hash: typeof Hash) => styled(hash)`
  flex-shrink: 0;
  opacity: 0.6;
  height: 100%;
  width: 16px;
  margin-right: 7px;
`;

export const Hashtag = icon(Hash)

export const NSFWTag = icon(NSFW)

export const Newstag = icon(News)

export const NSFWNewstag = icon(NSFWNews)

export const Storetag = icon(Store)

export const Rulestag = icon(Rules)

export const Name = styled('div')`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`

export const Emoji = styled(Twemoji)`
  width: 18px !important;
  height: 100% !important;
  margin-right: 2px !important;
  vertical-align: -0.7em;
`

export const Pings = styled('div')`
  display: inline-block;
  flex-shrink: 0;
  padding: 0 6px;
  margin: 7px 0;
  border-radius: 3px;

  font-size: 75%;
  line-height: 150%;
  font-weight: 500;

  background-color: #f04747;
  color: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 hsla(0, 0%, 100%, 0.15);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
`

export const WIP = styled('span')`
      color: inherit;
      border: 3px solid rgba(36,38,41, .5);
      border-color: inherit;
      padding: 1px;
      font-size: smaller;
      border-radius: 10px;
`

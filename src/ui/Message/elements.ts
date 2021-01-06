import webpCheck from '@ui/shared/webpCheck'
import { MemberLink } from '@ui/shared/Member'

import styled from './ThemeContext'

export const Group = styled('div')`
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 17px 35px 0 20px;
  user-select: text;
  word-wrap: break-word;

  @media (max-width: 500px), (max-height: 370px) {
    padding: 12px 35px 10px 15px;
  }

  @media (max-width: 260px) {
    padding: 12px 35px 10px 10px;
  }
`

export const ReplySpine = styled.div`
  position: absolute;
  width: 33px;
  height: 12px;
  top: 25px;
  left: 40px;
  border-left: 2px solid #4f545c;
  border-top: 2px solid #4f545c;
  border-top-left-radius: 6px;
`

export const RepliedMessage = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`

export const RepliedAvatar = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  user-select: none;
  vertical-align: sub;
`

export const RepliedUser = styled.span<NameProps>`
  color: ${({ color }) => (color !== '#000000' ? color : null)};
  font-weight: 500;
  opacity: .64;
  margin: 0 .25rem;
`

export const RepliedText = styled.div`
  color: rgba(255, 255, 255, .66);
  display: inline-block;

  * {
    color: inherit
  }

  a {
    color: #00b0f4;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 700;
    color: inherit;
  }
`

export const UnknownReplyIconWrapper = styled.div`
  background-color: #202225;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  margin-right: .25rem;
`

export const ReplySystemText = styled.span`
  color: rgba(255, 255, 255, .66);
  font-style: italic;
`

export const ReplyImageIcon = styled.svg`
  vertical-align: text-bottom;
  margin-left: 6px;
`

interface AvatarProps {
  url: string
  reply: boolean
}
export const Avatar = styled('div')<AvatarProps>`
  flex-shrink: 0;
  /*cursor: pointer;*/
  background-image: url('${props => webpCheck(props.url)}');
  border-radius: 50%;
  background-size: cover;
  height: 40px;
  width: 40px;
  margin-right: 20px;
  ${props => props.reply && 'margin-top: 24px;'}

  @media (max-width: 400px), (max-height: 370px) {
    height: 35px;
    width: 35px;
    margin-right: 15px;
  }
`

export const Messages = styled('div')`
  flex-grow: 1;
`

export const Edited = styled('span')`
  font-size: 0.625rem;
  line-height: 0.625rem;
  margin-left: 3px;
  opacity: 0.3;
  cursor: pointer;
`

export namespace Secondary {
  const Message = styled('span')`
    margin-left: 12px;
    padding-left: 48px;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 18px;
    color: ${({ theme }) => theme.colors._primary.fade(0.6).string()};
  `

  export const Pinned = styled(Message)`
    background-image: url("https://discord.com/assets/5da4cdab01d4d89c593c48c62ae0d937.svg");
  `

  export const Join = styled(Message)`
    background-image: url("https://discord.com/assets/b8029fe196b8f1382e90bbe81dab50dc.svg");
  `

  export const Boost = styled(Message)`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' name='PremiumGuildSubscriberBadge' class='icon-360yEu' aria-hidden='false' width='24' height='24' viewBox='0 0 8 12'%3E%3Cpath d='M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z' fill='%23ff73fa'%3E%3C/path%3E%3Cpath d='M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z' fill='%23ff73fa'%3E%3C/path%3E%3C/svg%3E");
  `

  export const X = styled(Message)`
    background-image: url("https://discord.com/assets/46db4c8d56c169f418cc5c0f0d4ddf70.svg");
  `

  export const Check = styled(Message)`
    background-image: url("https://discord.com/assets/286a546022f1e3cbe45b41090f8d6e97.svg");
  `

  export const Warning = styled(Message)`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='false' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z' fill-rule='evenodd' clip-rule='evenodd' fill='%23faa61a'%3E%3C/path%3E%3C/svg%3E");
  `

  export const Command = styled(Message)`
    color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='false' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%238e9297' fill-rule='evenodd' clip-rule='evenodd' d='M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z'%3E%3C/path%3E%3C/svg%3E");
  `
}

export const Command = styled.span`
  color: #7289da;
  font-weight: 500;
`

export const ApplicationIcon = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  vertical-align: text-top;
`

export const ApplicationName = styled.span`
  font-weight: 500;
`

export const CommandArgs = styled.div`
  margin-left: 60px;
  background-color: rgba(0, 0, 0, 9%);
  color: rgba(255, 255, 255, 70%);
  padding: .5rem;
  border-radius: .25rem;
  margin-top: .25rem;
  display: table;
`

export const CommandArgsSpine = styled.div`
  position: absolute;
  width: 33px;
  height: 1.5rem;
  bottom: 15px;
  left: 40px;
  border-left: 2px solid #4f545c;
  border-bottom: 2px solid #4f545c;
  border-bottom-left-radius: 6px;
`

// Username
interface NameProps {
  color: string
}

export const Member = styled(MemberLink)<NameProps>`
  color: ${({ color }) => (color !== '#000000' ? color : null)};
  font-weight: 500;
  /*cursor: pointer;

  &:hover {
    text-decoration: underline;
  }*/
`

export const Root = styled('div')`
  color: ${({ theme }) => theme.colors._primary.fade(0.173).string()};
  opacity: ${({ theme }) =>
    /* todo: theme.message.type === 'SENDING'* ? 0.5 : */ 1};

  font-size: 1rem;
  line-height: 1.1em;
  margin-top: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;

  * {
    color: inherit;
  }

  a {
    color: #00b0f4;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 700;
    color: inherit;
  }
`

export const Reactions = styled('div')``

export const Content = styled('div')`
  margin-bottom: 7px;
`

export namespace Sys {
  export const Container = styled('div')`
    height: 1px;
    margin: 12px 0;
  `

  export const Lines = styled('div')`
    width: calc(100% - 50px);
    height: 16px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      background-color: #f04747;
      content: '';
      height: 1px;
      display: block;
      opacity: 0.4;
    }
  `

  export const Message = styled('span')`
    display: inline-block;
    color: rgba(240, 71, 71, 0.8);
    line-height: 16px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
    z-index: 2;
    margin-top: -8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #36393f;
  `
}

export const Video = styled('video')`
  max-height: 225px;
  width: 400px;
  max-width: 100%;
  outline: none;
`

export const Attachment = styled.div`
  border: 1px solid rgba(0,0,0,.05);
  background-color: rgba(0,0,0,.04);
  max-width: 520px;
  width: 100%;
  padding: 10px;
  display: flex;
`

export const AttachmentIcon = styled.img`
  width: 30px;
  height: 40px;
  margin-right: 8px;
`

export const AttachmentInner = styled.div`
  flex: 1;
`

export const AttachmentSize = styled.div`
  color: rgba(255,255,255,.22);
  line-height: 16px;
  font-size: 12px;
`

export const Audio = styled.div`
  border: 1px solid rgba(0,0,0,.05);
  background-color: rgba(0,0,0,.04);
  width: 400px;
  max-width: 100%;
  padding: 10px;
`

export const AudioMetadata = styled.div`
  display: flex;
`

export const AudioPlayer = styled.audio`
  width: 100%;
  height: 32px;
  margin-top: 8px;
  outline: 0;
  border-radius: 3px;
`

export const StickerTooltipIcon = styled.svg`
  vertical-align: bottom
`

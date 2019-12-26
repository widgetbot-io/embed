import { MemberLink } from '@ui/shared/Member'

import styled from './ThemeContext'

export const Group = styled('div')`
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 20px 35px 13px 20px;
  user-select: text;
  word-wrap: break-word;

  &:not(:nth-last-of-type(1)) {
    border-bottom: 1px solid
      ${({ theme }) => theme.colors._primary.fade(0.96).string()};
  }

  @media (max-width: 500px), (max-height: 370px) {
    padding: 12px 35px 10px 15px;
  }

  @media (max-width: 260px) {
    padding: 12px 35px 10px 10px;
  }
`

interface AvatarProps {
  url: string
}
export const Avatar = styled('div')<AvatarProps>`
  flex-shrink: 0;
  cursor: pointer;
  background-image: url('${props => props.url}');
  border-radius: 50%;
  background-size: cover;
  height: 40px;
  width: 40px;
  margin-right: 20px;

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
    padding-left: 26px;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 18px;
    color: ${({ theme }) => theme.colors._primary.fade(0.6).string()};
  `

  export const Join = styled(Message)`
    background-image: url("https://discordapp.com/assets/b8029fe196b8f1382e90bbe81dab50dc.svg");
  `

  export const Pinned = styled(Message)`
    background-image: url("https://discordapp.com/assets/5da4cdab01d4d89c593c48c62ae0d937.svg");
  `
}

// Username
interface NameProps {
  color: string
}

export const Member = styled(MemberLink)<NameProps>`
  color: ${({ color }) => (color !== '#000000' ? color : null)};
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Root = styled('div')`
  color: ${({ theme }) => theme.colors._primary.fade(0.3).string()};
  opacity: ${({ theme }) =>
    /* todo: theme.message.type === 'SENDING'* ? 0.5 : */ 1};

  font-size: 0.9375rem;
  line-height: 1.1em;
  margin-top: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;

  * {
    color: inherit;
  }

  a {
    color: #0096cf;
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
    background: #36393e;
  `
}

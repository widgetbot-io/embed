import { MemberLink } from '@ui/shared/Member'

import styled from './ThemeContext'

export const Group = styled('div')`
  border-bottom: 1px solid
    ${({ theme }) => theme.colors._primary.fade(0.96).string()};
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: calc(100% - 10px - 20px);
  margin-left: 20px;
  margin-right: 10px;
  padding: 20px 0 13px;
  user-select: text;
  word-wrap: break-word;

  &.join {
    padding: 15px 0;
  }

  @media (max-width: 500px), (max-height: 370px) {
    padding: 12px 0 10px;
    margin-left: 15px;
  }

  @media (max-width: 260px) {
    margin-left: 10px;
    width: calc(100% - 20px);
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
  margin-right: 20px;
`

export const Edited = styled('span')`
  font-size: 0.625rem;
  line-height: 0.625rem;
  margin-left: 3px;
  opacity: 0.3;
  cursor: pointer;
`

export const JoinText = styled('span')`
  padding-left: 26px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px;
  color: ${({ theme }) => theme.colors._primary.fade(0.4).string()};
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='M18 0H0v18h18z'/%3e%3cpath fill='%2343B581' d='M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0'/%3e%3c/g%3e%3c/svg%3e");
`

export const JoinMember = styled(MemberLink)`
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

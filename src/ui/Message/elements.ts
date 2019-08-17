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
    color: ${({ theme }) => theme.colors._primary.fade(0.4).string()};
  `

  export const Join = styled(Message)`
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='M18 0H0v18h18z'/%3e%3cpath fill='%2343B581' d='M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0'/%3e%3c/g%3e%3c/svg%3e");
  `

  export const Pinned = styled(Message)`
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='M7.970563-6.99999975L24.94112575 9.970563 7.970563 26.94112575-8.99999975 9.970563'/%3e%3cpath fill='%2399AAB5' d='M7.970563 12.79899012l6.36396103-6.36396103-2.82842712-2.82842716L5.1421359 9.970563l-.3599137-.3599137c-.18605725-.18605725-.5054843-.18890185-.70074648.0063603-.18955157.18955158-.19810974.50899704-.0063603.7007465l3.5482545 3.5482545c.18605727.18605725.50548433.18890186.7007465-.0063603.18955156-.18955157.19810974-.50899704.0063603-.7007465l-.3599137-.35991368zm7.7781746-4.94974746l.70710677.70710678 1.41421357-1.41421356L10.79899012.07106806 9.38477656 1.48528163l.70710678.70710678L4.4350291 7.8492427H1.60660196L.1923884 9.26345622l3.67695527 3.67695526-2.82842713 2.82842713 1.13137086 1.1313709 2.8284271-2.82842713 3.67695526 3.67695526 1.41421356-1.41421356V13.5060969l5.65685425-5.65685424z'/%3e%3c/g%3e%3c/svg%3e");
  `
}

export const Member = styled(MemberLink)`
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

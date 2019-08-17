import styled, { css } from '@lib/emotion'

const base = css`
  user-select: none;
  color: #fff;
  line-height: 16px;
  font-size: 10px;
  font-weight: 500;
  flex-shrink: 0;
  vertical-align: top;
  margin-left: 3px;

  @media (max-width: 340px), (max-height: 370px) {
    font-size: 8px;
    font-weight: 400;
    margin-left: 5px;
  }
`

// Bot tag
export const Tag = styled('span')`
  ${base};
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 3px;
  flex-shrink: 0;
  padding: 1px 2px;
  margin-left: 6px;
  margin-top: 4px;
  margin-bottom: 4px;
  text-transform: uppercase;

  @media (max-width: 340px), (max-height: 370px) {
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 13px;
  }
`

const TagIcon = css`
  ${base};
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  width: 21px;

  & ~ a {
    margin-left: 0;
  }
`

export const Verified = styled('a')`
  ${TagIcon};
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' ${({
    theme
  }) =>
    `fill='${encodeURIComponent(
      theme.colors.accent
    )}'`} viewBox='0 0 96 96'%3e%3cpath d='M79.2 44.2l-4.4-5.4a6.6 6.6 0 0 1-1.3-3.1l-.8-6.9a6.2 6.2 0 0 0-5.4-5.4l-6.9-.8a6 6 0 0 1-3.2-1.3l-5.4-4.4a6 6 0 0 0-7.6 0l-5.4 4.4c-.9.7-1.9 1.1-3.1 1.3l-6.9.8a6.2 6.2 0 0 0-5.4 5.4l-.8 6.9a6 6 0 0 1-1.3 3.2l-4.4 5.4a6 6 0 0 0 0 7.6l4.4 5.4c.7.9 1.1 1.9 1.3 3.1l.8 6.9a6.2 6.2 0 0 0 5.4 5.4l6.9.8a6 6 0 0 1 3.2 1.3l5.4 4.4a6 6 0 0 0 7.6 0l5.4-4.4c.9-.7 1.9-1.1 3.1-1.3l6.9-.8a6.2 6.2 0 0 0 5.4-5.4l.8-6.9a6 6 0 0 1 1.3-3.2l4.4-5.4a6.3 6.3 0 0 0 0-7.6zM41.9 64.3L27.7 50.1l6.1-6.1 8.1 8.1 20.3-20.3 6.1 6.3-26.4 26.2z'/%3e%3c/svg%3e");
`

export const Sysadmin = styled('a')`
  ${TagIcon};
  background-size: 92%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' ${({
    theme
  }) =>
    `fill='${encodeURIComponent(
      theme.colors.accent
    )}'`} viewBox='0 0 24 24'%3e%3cpath fill='none' d='M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z'/%3e%3cpath d='M10 16v-1H3v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4h-7v1h-4zm10-9h-4V5l-2-2h-4L8 5v2H4a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h6v-2h4v2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-6 0h-4V5h4v2z'/%3e%3c/svg%3e");
`

import styled from '@lib/emotion'

export const Root = styled('footer')`
  height: 40px;
  flex-shrink: 0;
  display: flex;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors._primary.fade(0.7).string()};
  user-select: none;
  z-index: 1;

  background-color: ${({ theme }) =>
    theme.colors._background
      .fade(0.9)
      .darken(0.7)
      .string()};
  box-shadow: 0px 0px 27px 15px
    ${({ theme }) =>
      theme.colors._background
        .fade(0.9)
        .darken(0.7)
        .string()};
`

export const Developers = styled('div')`
  display: flex;
  flex-grow: 1;
`

export const Developer = styled('img')`
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin: 0 4px;
  opacity: 0.8;
  transition: opacity 0.2s ease, transform 0.3s ease;
  -webkit-user-drag: none;

  &:hover {
    opacity: 1;
    transform: scale(1.2) rotate(-5deg);
  }
`

export const Version = styled('a')`
  color: inherit;
  line-height: 20px;
  text-align: right;
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

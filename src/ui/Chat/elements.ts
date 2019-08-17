import styled, { css } from '@lib/emotion'

export const Root = styled('form')`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 10px;
  position: relative;
  margin: 0 15px 20px;
  box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.06);

  ${({ theme }) =>
    theme.url.preset === 'crate' &&
    css`
      margin: 0;
      padding: 6px;
      background-color: ${theme.colors._primary.fade(0.9).string()};

      border-top: 1px solid ${theme.colors._primary.fade(0.9).string()};
      box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
    `};
`

export const Typing = styled('div')``

interface FieldProps {
  rows: number
}
export const Field = styled('div')<FieldProps>`
  display: flex;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors._primary.fade(0.9).string()};
  height: ${({ rows }) => (rows > 7 ? 7 : rows) * 20 + 22}px;

  ${({ theme, rows }) =>
    theme.url.preset === 'crate' &&
    css`
      background-color: transparent;
    `};
`

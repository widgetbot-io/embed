import styled, { css } from '@lib/emotion'

export const Root = styled('form')`
  display: ${({theme}) => theme.readonly ? 'none' : 'flex'};
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  margin: auto 15px 20px;

  ${({ theme }) =>
    theme.url.preset === 'crate' &&
    css`
      margin: auto 0 0;
      padding: 6px;
      background-color: ${theme.colors._primary.fade(0.9).string()};

      border-top: 1px solid ${theme.colors._primary.fade(0.9).string()};
      box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
    `};
`

export const Typing = styled('div')``

interface FieldProps {
  rows: number,
  canSend: boolean
}
export const Field = styled('div')<FieldProps>`
  display: flex;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors._primary.fade(0.95).string()};
  height: ${({ rows, canSend }) => canSend ? (rows > 7 ? 7 : rows) * 20 + 22 + 'px' : 'auto'};

  ${({ theme, rows }) =>
    theme.url.preset === 'crate' &&
    css`
      background-color: transparent;
    `};
`

import { css, Interpolation, Theme } from '@lib/emotion'

// TODO: Fix typings

const focusable: Interpolation<{ theme: Theme }> = ({ theme }) => css`
  &::after {
    content: '';
    border: 2px solid ${theme.colors.accent};
    position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  &:focus:not(:hover)::after {
    opacity: 1;
  }
`

export default focusable as any

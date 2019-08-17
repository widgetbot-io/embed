import styled, { css } from '@lib/emotion'

interface Props {
  open: boolean
}

export const Ham = styled('button')<Props>`
  border: none;
  background: none;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.accent};
  display: inline-block;
  margin-left: 20px;
  margin-right: 10px;
  position: relative;
  width: 20px;
  height: 25px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: -8px;
    left: -10px;
    width: 40px;
    height: 40px;
    opacity: 0;
    transition: opacity 0.1s ease;
    background-color: ${({ theme }) =>
      theme.colors._primary.fade(0.93).string()};
    border-radius: 50%;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 521px) {
    ${({ open }) =>
      open
        ? css`
            transform: rotate(-180deg);
            &::before {
              top: -7px;
              left: -9px;
            }
            div {
              &::before {
                top: -4.8px;
                width: 15px;
                transform: rotate(45deg);
                right: -3px;
              }
              &::after {
                top: 4.8px;
                width: 15px;
                transform: rotate(-45deg);
                right: -3px;
              }
            }
          `
        : null};
  }
`

export const Burger = styled('div')`
  &,
  &::before,
  &::after {
    content: '';
    color: inherit;
    position: absolute;
    height: 2px;
    width: 100%;
    top: calc(50% - 2px);
    right: 0;
    background-color: currentColor;
    transition: 0.3s;
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }
`

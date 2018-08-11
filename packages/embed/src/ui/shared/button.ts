import focusable from '@ui/shared/focusable'
import styled, { css } from '@lib/emotion'

interface Props {
  variant?: 'large' | 'small' | 'mini'
  color?: string
}

const darken = `inset 0 0 0 99999px rgba(0, 0, 0, 0.1)`
const lighten = `inset 0 0 0 99999px rgba(255, 255, 255, 0.1)`

const Button = styled('button')<Props>`
  position: relative;
  overflow: hidden;
  background-color: ${({ color, theme }) => color || theme.colors.accent};
  transition: box-shadow 0.3s ease;
  text-align: center;
  border: none;
  text-decoration: none;

  cursor: pointer;
  font-weight: 500;
  outline: none;
  user-select: none;

  ${({ variant }) =>
    variant === 'large'
      ? css`
          border-radius: 3px;
          font-size: 16px;
          height: 44px;
          line-height: 44px;
          min-width: 130px;
          padding: 0 20px;
          &::after {
            display: none;
          }
          &::before {
            background: #fff;
            content: '';
            height: 500px;
            opacity: 0.2;
            position: absolute;
            left: 0px;
            top: 0px;
            transform: rotate(35deg) translate(-215px, -215px);
            transition: transform 0.5s ease;
            width: 20px;
            pointer-events: none;
            box-shadow: 0 0 40px 24px #fff;
          }
        `
      : variant === 'mini'
        ? css`
            &,
            &::after {
              border-radius: 20px;
            }
            font-size: 14px;
            height: 24px;
            line-height: 24px;
            min-width: 60px;
            padding: 0 10px;
          `
        : css`
            &,
            &::after {
              border-radius: 20px;
            }
            font-size: 15px;
            height: 28px;
            line-height: 28px;
            min-width: 75px;
            padding: 0 15px;
          `};

  &:hover,
  &:focus {
    box-shadow: ${darken}, 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

    &::before {
      transform: rotate(35deg) translate(500%, -50px);
    }
  }

  &:active {
    box-shadow: ${lighten}, 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  ${focusable};
`

export default Button

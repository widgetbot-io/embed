import Color from 'color'

import styled, { ShadowStyles } from '../../controllers/emotion'
import CloseIcon from './icons/close'
import OpenIcon from './icons/open'

export const Root = ShadowStyles(
  ({ styled, keyframes, css }) => styled('button')`
    position: fixed;
    z-index: 2147483000;
    cursor: pointer;
    outline: none;

    height: 56px;

    border-radius: 56px;
    border: none;
    padding: 0;
    transition: box-shadow 0.2s ease, background-color 0.3s ease,
      opacity 0.2s ease, transform 0.2s ease;

    animation: ${keyframes`
      from {
        transform: scale(0.1);
        opacity: 0;
      }
      to {
        transform: initial;
        opacity: 1;
      }
    `} 0.3s ease;

    ${({ theme }) => {
      const { x, y } = theme.coords

      return css({
        [x.axis]: x.offset,
        [y.axis]: y.offset
      })
    }};

    ${({ theme }) => {
      const color = Color(theme.options.color)

      return theme.open
        ? css`
            background-color: transparent;
          `
        : css`
            box-shadow: 0px 3px 5px -1px ${color.fade(0.7).toString()},
              0px 6px 10px 0px ${color.fade(0.86).toString()},
              0px 1px 18px 0px ${color.fade(0.88).toString()};
            background-color: ${theme.options.color};
          `
    }};

    ${({ theme }) => {
      const { x, y } = theme.coords

      return y.margin && x.margin
        ? css`
            @media (max-width: 500px) {
              border-${y.axis}-${x.axis}-radius: 50%;

              ${x.axis}: ${x.offset - x.margin + 2}px;
              ${y.axis}: ${y.offset - y.margin + 2}px;
            }
          `
        : null
    }};
  `
)

interface IIndicator {
  value: number
}

export const Indicator = ShadowStyles(
  ({ styled, css }) => styled<IIndicator, 'span'>('span')`
    position: absolute;
    top: 0;

    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
    text-align: center;
    user-select: none;

    font-family: Roboto, sans-serif;
    font-size: ${({ value }) =>
      value > 50 ? '7px' : value > 9 ? `9px` : `12px`};

    background: #ff2a2a;
    color: #fff;
    box-shadow: 0px 3px 5px -1px rgba(255, 42, 42, 0.38),
      0px 4px 9px 0px rgba(255, 42, 42, 0.38),
      0px 1px 12px 0px rgba(255, 42, 42, 0.22);

    ${({ theme }) => css({ [theme.coords.x.axis]: 0 })};
  `
)

export namespace Icons {
  export const Root = styled('div')`
    width: 56px;
    height: 100%;
    border-radius: inherit;

    & > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.16s linear, opacity 0.2s ease;
    }
  `

  export const Open = ShadowStyles(
    ({ styled, css }) => styled(OpenIcon)`
      padding: 12px;
      border-radius: inherit;

      ${({ theme }) => {
        const [url, size] = theme.options.glyph

        return (
          url &&
          size &&
          css`
            background: url(${url}) no-repeat center;
            background-size: ${size};

            * {
              display: none;
            }
          `
        )
      }};

      ${({ theme }) =>
        theme.open &&
        css`
          opacity: 0;
          transform: rotate(30deg) scale(0);
        `};
    `
  )

  export const Close = ShadowStyles(
    ({ styled, css }) => styled(CloseIcon)`
      padding: 19px;
      opacity: 0.6;
      border-radius: inherit;

      &:hover {
        opacity: 0.95;
      }

      ${({ theme }) =>
        !theme.open &&
        css`
          opacity: 0 !important;
          transform: rotate(30deg) scale(0);
        `};
    `
  )
}

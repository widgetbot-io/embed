import WidgetBot from '@widgetbot/react-embed'

import styled, { ShadowStyles } from '../../controllers/emotion'

export const Root = ShadowStyles(
  ({ styled, css }) => styled('div')`
    position: fixed;
    z-index: 2147482999;
    transition: opacity 0.4s ease,
      transform 0.3s cubic-bezier(0.24, 0.6, 0.35, 0.96);

    ${({ theme }) => {
      const { x, y } = theme.coords

      return css({
        height: `calc(100% - ${y.offset + 20}px)`,
        [x.axis]: x.offset,
        [y.axis]: y.offset,
        transformOrigin: `${x.axis === 'right' ? 100 : 0}% ${
          y.axis === 'bottom' ? 100 : 0
        }%`
      })
    }};

    @media (min-width: 501px) {
      width: 400px;
      max-height: 600px;
    }

    @media (max-width: 500px) {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      & > div {
        border-radius: 0px !important;
      }
    }

    ${({ theme }) =>
      theme.open
        ? css``
        : css`
            opacity: 0;
            pointer-events: none;
            transform: scale(0.1);

            & > div {
              border-radius: 200px !important;
            }
          `};
  `
)

export const IFrame = styled(WidgetBot)`
  height: 100%;
  width: 100%;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.3);
  transition: border-radius 0.2s ease;

  border-radius: 17px !important;
`

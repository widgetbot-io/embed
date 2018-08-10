import styled, { ShadowStyles } from '../../../controllers/emotion'

const Markdown = require('react-markdown')

export const Root = styled('div')`
  transition: all 0.5s cubic-bezier(0, 0.8, 0.25, 1.18);
  padding-bottom: 6px;
  overflow: auto;
  flex-shrink: 0;

  &.exiting,
  &.entering {
    pointer-events: none;
    opacity: 0;
    transform: translateX(
      ${({ theme }) => (theme.coords.x.axis === 'right' ? 20 : -20)}px
    );
  }
`

export const Avatar = styled('img')`
  height: 35px;
  width: 35px;
  float: ${({ theme }) => theme.coords.x.axis};
  border-radius: 100%;
  cursor: pointer;
`

export const Content = ShadowStyles(
  ({ styled, css }) => styled(Markdown)`
    padding: 10px 16px;
    float: ${({ theme }) => theme.coords.x.axis};

    max-width: calc(100% - 100px);
    transform: translate3d(0, 0, 0);
    background-color: #36393e;
    color: rgba(255, 255, 255, 0.7);
    word-wrap: break-word;
    word-break: break-word;
    line-height: 18px;
    font-size: 15px;
    white-space: pre-wrap;
    box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.5);
    border-radius: 6px;

    font-family: 'Roboto', sans-serif;

    ${({ theme }) =>
      css`
        border-top-${theme.coords.x.axis}-radius: 0;
        margin-${theme.coords.x.axis}: 13px;
      `};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      border-style: solid;
      border-color: #36393e transparent;
      display: block;
      width: 0;

      ${({ theme }) =>
        css`
          ${theme.coords.x.axis}: -10px;
          border-width: ${theme.coords.x.axis === 'left'
            ? `10px 0 0 10px`
            : ` 10px 10px 0 0`};
        `};
    }

    p {
      margin: 0;
    }

    a {
      color: #1296cf;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    a {
      pointer-events: initial;
    }
  `
)

import './res/globalStyles.css'
import './res/globalStyles.ts'

import styled, { injectGlobal, Theme } from '@lib/emotion'

export const Notifications = styled('div')`
  button {
    cursor: pointer;
    outline: 0;
    font-weight: 500 !important;
  }

  .notifications-br {
    bottom: ${({ theme }) =>
      theme.url.height ? `calc(100% - ${theme.url.height}px)` : '0'};
  }

  .notification {
    background-color: ${({ theme }) =>
      theme.colors._background.lighten(0.1).toString()} !important;
    min-height: 60px;
    height: auto !important;
  }

  .notification-dismiss {
    background-color: ${({ theme }) =>
      theme.colors._background.lighten(0.4).toString()} !important;
  }
`

export namespace GlobalStyles {
  let injected = false
  const CSS = document.createElement('style')

  export function inject(theme: Theme) {
    if (injected) return update(theme)
    injected = true

    injectGlobal`
      html, body, #root {
        position: relative;
        width: ${theme.url.width ? `${theme.url.width}px` : `100%`};
        height: ${theme.url.height ? `${theme.url.height}px` : `100%`};
        background-color: ${theme.colors.background};
        overflow: hidden;
      }

      #root {
        opacity: 1 !important;
        transform: initial !important;
      }

      /* Resets */
      * {
        color: ${theme.colors.primary};
        font-family: Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande,
          sans-serif;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        word-break: break-word;
      }
    `
    CSS.setAttribute('custom-css', '')
    document.body.appendChild(CSS)
  }

  function update(theme: Theme) {
    CSS.innerText = theme.css

    injectGlobal`
      html, body, #root {
        width: ${theme.url.width ? `${theme.url.width}px` : `100%`};
        height: ${theme.url.height ? `${theme.url.height}px` : `100%`};
        background-color: ${theme.colors.background};
      }

      /* Resets */
      * {
        color: ${theme.colors.primary};
      }
    `
  }
}

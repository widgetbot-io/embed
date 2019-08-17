/* eslint-disable */

import './res/globalStyles.css'
import './res/globalStyles.ts'

import styled, { injectGlobal, Theme } from '../lib/emotion'

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

export class GlobalStyles {
  static injected = false;
  static CSS = document.createElement('style');

   static inject(theme: Theme) {
    if (GlobalStyles.injected) return GlobalStyles.update(theme);
    GlobalStyles.injected = true;

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
     GlobalStyles.CSS.setAttribute('custom-css', '')
    document.body.appendChild(GlobalStyles.CSS)
  }

  static update(theme: Theme) {
    GlobalStyles.CSS.innerText = ''; // TODO: theme.css

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

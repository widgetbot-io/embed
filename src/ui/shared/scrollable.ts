import Scrollbars from 'react-custom-scrollbars'
import styled from '@lib/emotion'

/**
 * Visible scrollbar
 */
export const ScrollVisible = styled(Scrollbars)`
  display: flex;
  height: 100%;
  width: 100%;
  > div {
    &:nth-child(1) {
      overflow-x: hidden !important;
      overflow-y: scroll !important;
    }
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      background-color: ${({ theme }) =>
        theme.colors._background.darken(0.15).string()};
      border-radius: 50px !important;
      width: 8px !important;
      > div {
        cursor: default !important;
        background-color: ${({ theme }) =>
          theme.colors._background.darken(0.45).string()} !important;
        border-radius: 50px !important;
        width: 14px !important;
        margin-left: -3px !important;
        border: 3px solid ${({ theme }) => theme.colors.background};
      }
    }
  }
`

export const ScrollOverlay = styled(Scrollbars)`
  > div:nth-child(3) {
    > div {
      cursor: default !important;
      opacity: 0;
      transition: opacity 0.1s ease;
      &:hover {
        opacity: 1;
      }
    }
  }
  > div:hover + div + div {
    > div {
      opacity: 1;
    }
  }
`

import focusable from '@ui/shared/focusable'
import styled, { css, keyframes } from 'react-emotion'

const bounceIn = keyframes`
  from {
    transform: scale(0.6);
  }
  to {
    transform: initial;
  }
`

interface IRoot {
  open: boolean
}
export const Root = styled('dialog')<IRoot>`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding: 0;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  opacity: 0;
  transition: opacity 0.1s ease;

  ${({ open }) =>
    open
      ? css`
          opacity: 1;
        `
      : css`
          pointer-events: none;
        `};
`

export const Box = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 20px);
  max-width: calc(100vw - 40px);
  animation: ${bounceIn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (max-width: 270px), (max-height: 200px) {
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
  }
`

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 3px;

  @media (max-width: 270px), (max-height: 200px) {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`

export const Close = styled('button')`
  position: absolute;
  right: 0;
  height: 30px;
  width: 30px;
  margin: 4px;

  background: ${({ theme }) =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(
      theme.colors.primary
    )}' viewBox='0 0 44 44'%3e%3cpath d='M38.8 0L44 5.2 5.2 44 0 38.8 38.8 0z'/%3e%3cpath d='M5.2 0L44 38.8 38.8 44 0 5.2 5.2 0z'/%3e%3c/svg%3e")`};
  background-size: 40%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0.5;

  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>
      theme.colors._primary.fade(0.8).string()};
  }

  &,
  &::after {
    border-radius: 50%;
  }

  ${focusable};
`

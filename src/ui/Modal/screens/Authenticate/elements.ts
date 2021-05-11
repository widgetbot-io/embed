import Button from '@ui/shared/button'

import { Content } from '@ui/Modal'
import styled, { css } from 'react-emotion'

interface Props {
  loading: boolean
}
export const Root = styled(Content)<Props>`
  padding: 18px 40px;
  text-align: center;
  user-select: none;
  width: auto;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  ${({ loading }) =>
    loading
      ? css`
          & > * {
            opacity: 0.35;
            pointer-events: none;
          }
        `
      : null};
`

export const Title = styled('h1')`
  font-family: var(--font-display);
  font-size: 26px;
  line-height: 32px;
  font-weight: 300;
  margin-bottom: 8px;
`

export const Greeting = styled('h2')`
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  opacity: 0.3;
  margin-bottom: 20px;
`

interface GroupProps {
  label: string
}
export const Group = styled('form')<GroupProps>`
  &::before {
    display: block;
    content: ${({ label }) => JSON.stringify(label)};
    text-align: left;

    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 16px;
    font-size: 12px;
    opacity: 0.6;
  }

  & > * {
    display: block;
    width: 100%;
  }
`

export const Input = styled('input')`
  height: 40px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 16px;

  background-color: rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors._primary.fade(0.1).string()};

  &:focus,
  &:active {
    border-color: #00b0f4;
  }
`

export const Create = styled(Button)`
  margin: 20px 0 14px;
`

export const SSO = styled('div')`
  font-size: 14px;
  color: ${({ theme }) => theme.colors._primary.fade(0.8).string()};

  text-align: center;
`

export const Discord = styled('button')`
  font-size: 14px;
  display: inline-block;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  margin-left: 5%;

  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    text-decoration: underline;
  }
`

export const Overlay = styled('div')`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  background-color: rgba(0, 0, 0, 0.7);
`
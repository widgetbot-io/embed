import Button from '@ui/shared/button'

import { Content } from '../elements'
import styled, { css } from '../elements/ThemeContext'

interface Props {
  loading: boolean
}
export const Root = styled(Content)<Props>`
  padding: 18px 40px;
  text-align: center;
  user-select: none;

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
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const Create = styled(Button)`
  margin: 20px 0 14px;
`

export const SSO = styled('div')`
  font-size: 14px;
  color: ${({ theme }) => theme.colors._primary.fade(0.8).string()};

  text-align: left;
`

export const Discord = styled('button')`
  font-size: 14px;
  display: inline-block;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    text-decoration: underline;
  }
`

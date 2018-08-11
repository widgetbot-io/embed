import * as React from 'react'
import Emoji from '@ui/shared/Emoji'
import styled, { css } from '@lib/emotion'

const svg = css``

const Root = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  > *:first-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  > svg {
    height: 40%;
    width: 40%;
    opacity: 0.08;
  }
`

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 40%;
  > * {
    width: 100%;
    height: 20%;
  }
  > svg {
    height: 100%;
    opacity: 0.08;
  }
`

export const Info = styled(Emoji.withComponent('div'))`
  font-size: 21px;
  font-weight: 600;
  margin-top: 8px;
  text-align: center;
  user-select: none;
  white-space: pre-line;

  color: ${({ theme }) => theme.colors._primary.fade(0.9).string()};
`

export const Wrap = function<T>(wrapper: T): T {
  const Component: any = wrapper
  return (({ children, ...props }) => (
    <Root {...props}>
      {children ? (
        <Container>
          <Component />
          {children}
        </Container>
      ) : (
        <Component />
      )}
    </Root>
  )) as any
}

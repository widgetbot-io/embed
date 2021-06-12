import Emoji from '@ui/shared/Emoji'
import styled, { css } from '@lib/emotion'
import { store } from '@models'
import { observer } from 'mobx-react'

interface Props {
  squashed: boolean
}

const Root = styled('div')<Props>`
  position: absolute;
  width: 100%;
  transition: width 0.3s ease;
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

  ${({ squashed, theme }) =>
    // center overlay when sidebar is open
    squashed && !theme.singleChannel
      ? css`
          @media (min-width: 521px) {
            width: calc(100% - 200px);
          }

          @media (min-width: 521px) and (max-width: 400px),
            (min-width: 521px) and (max-height: 340px) {
            width: calc(100% - 180px);
          }
        `
      : null};
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
  return observer(({ children, ...props }) => (
    <Root {...props} squashed={store.sidebar.isOpen}>
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

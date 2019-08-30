import { ScrollVisible } from '@ui/shared/scrollable'
import SmartList from '@ui/shared/SmartList'
import styled from '@lib/emotion'
import { AutoSizer } from 'react-virtualized'

interface Props {
  squashed: boolean
}

export const Root = styled('div')<Props>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  transition: margin 0.3s ease, width 0.3s ease, box-shadow 0.2s ease;
`

export const Scroller = ScrollVisible.withComponent(SmartList)

export interface MessagesWrapperProps {
  stale: boolean
}

export const MessageList = styled(AutoSizer)``

export const MessagesWrapper = styled('div')<MessagesWrapperProps>`
  flex-grow: 1;

  ${MessageList} {
    transition: opacity 0.2s ease;
    opacity: ${({ stale }) => (stale ? 0.4 : 1)};
  }
`

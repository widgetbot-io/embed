import { ScrollVisible } from '@ui/shared/scrollable'
import SmartList from '@ui/shared/SmartList'
import styled from '@lib/emotion'

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

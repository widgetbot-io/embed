import styled from '@lib/emotion'
import { ScrollOverlay } from '@ui/shared/scrollable'

export const Root = styled(ScrollOverlay)`
  & > div:nth-child(1) {
    & > *:last-child {
      margin-bottom: 40px;
    }
  }
`

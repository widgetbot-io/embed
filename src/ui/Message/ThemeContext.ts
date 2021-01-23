import { Message } from '@generated'
import styled from '@emotion/styled'
import { Theme } from '@lib/emotion'

export * from '@lib/emotion'

interface Context extends Theme {
  message: Message
}

export default styled

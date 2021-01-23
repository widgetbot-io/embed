import { Theme } from '@lib/emotion'
import styled, { CreateStyled } from '@emotion/styled'

export * from '@lib/emotion'

interface Context extends Theme {
  embed: /*Embed*/ any // TODO: FIX
}
export default styled as CreateStyled<Context>

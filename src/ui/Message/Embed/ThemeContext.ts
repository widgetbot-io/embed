import { Theme } from '@lib/emotion'
import styled from '@emotion/styled'

export * from '@lib/emotion'

declare module '@emotion/react' {
  interface Context extends Theme {
    embed: /*Embed*/ any // TODO: FIX
  }
}
export default styled

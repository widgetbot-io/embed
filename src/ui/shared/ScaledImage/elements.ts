import styled from '@lib/emotion'

interface IRoot {
  width: number
  height: number
}

export const Root = styled('img')<IRoot>`
  width: ${({ width }) => (width ? `${width}px` : null)};
  width: ${({ height }) => (height ? `${height}px` : null)};
`

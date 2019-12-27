import styled from '../ThemeContext'

interface Props {
  color: number
}
export const ColorPill = styled('div')<Props>`
  width: 4px;
  border-radius: 3px 0 0 3px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background-color: ${({ color }) =>
    color
      ? `rgba(${(color >> 16) & 0xff},${(color >> 8) & 0xff},${color & 0xff},1)`
      : `rgba(255, 255, 255, 0.2)`};
`

import ExpandableImage from '@ui/shared/ExpandableImage'

import styled, { css } from '../ThemeContext'

interface Props {
  rich?: boolean,
  type: string
}
export const Thumbnail = styled(ExpandableImage)<Props>`
  border-radius: 3px;
  object-fit: contain;
  flex-shrink: 0;
  cursor: pointer;

  ${({ rich, type }) =>
    rich
      ? css`
          margin: 5px 0;
        `
      : /^article|image$/.test(type)
        ? css`
            margin-top: 8px;
          `
        : css`
            margin-left: 20px;
          `};
`

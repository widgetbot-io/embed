import withProps from 'recompose/withProps'
import ExpandableImage from '@ui/shared/ExpandableImage'
import styled from '@lib/emotion'

interface ImageProps {
  height: number
  width: number
}

const EImage = withProps({
  maxWidth: 400,
  maxHeight: 300
})(ExpandableImage as any) as typeof ExpandableImage

export const Image = styled(EImage)<ImageProps>`
  display: block;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 3px;

  @media (max-width: 700px) {
    width: 65%;
    height: auto;
  }

  @media (max-width: 650px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`

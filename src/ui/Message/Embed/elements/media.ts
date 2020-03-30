import withProps from 'recompose/withProps'
import ExpandableImage from '@ui/shared/ExpandableImage'
import styled from '@lib/emotion'

interface ImageProps {
  height: number
  width: number
}
// @ts-ignore
const EImage = withProps({
  maxWidth: 400,
  maxHeight: 300
})(ExpandableImage as any) as typeof ExpandableImage

export const Image = styled(EImage)<ImageProps>`
  display: block;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 3px;
`;

export const SpoilerImage = styled(EImage)<ImageProps>`
  display: block;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0.5px 0.5px 1px 1px rgba(0,0,0,.1);

  & > img {
    filter: blur(44px);
  }
`;

/*
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
*/

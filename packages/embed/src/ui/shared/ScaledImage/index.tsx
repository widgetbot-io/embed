import * as React from 'react'
import { css } from '@lib/emotion'

import { Root } from './elements'

interface Scaler {
  width?: number
  height?: number
  maxWidth?: number
  maxHeight?: number
}
interface Props extends Scaler {
  src: string
  className?: string
}

class ScaledImage extends React.PureComponent<Props> {
  render() {
    const { className, src } = this.props

    const { width, height } = new Scale(this.props)

    return (
      <Root
        className={className || ''}
        src={src}
        height={height}
        width={width}
      />
    )
  }
}

export default ScaledImage

export class Scale {
  public width: number
  public height: number
  public scale: number

  public css: string

  private Image: { width: number; height: number }
  private Max: { width: number; height: number }

  constructor({ width, height, maxWidth, maxHeight }: Scaler) {
    this.Image = {
      width,
      height
    }
    this.Max = {
      height: maxHeight,
      width: maxWidth
    }

    this.scaleImage()

    this.css = css`
      ${this.width && `width: ${this.width}px`};
      ${this.height && `height: ${this.height}px`};
    `
  }

  scaleImage() {
    const { Image, Max } = this

    if (!(Image.width && Image.height)) {
      return {}
    }

    const ratio =
      Image.height < Image.width ? ['width', 'height'] : ['height', 'width']

    const factor =
      Image[ratio[0]] > Max[ratio[0]]
        ? ratio[0]
        : Image[ratio[1]] > Max[ratio[1]]
          ? ratio[1]
          : null

    const scale = factor ? Max[factor] / Image[factor] : 1

    this.scale = scale
    this.width = Math.round(Image.width * scale)
    this.height = Math.round(Image.height * scale)
  }
}

import optimize from '@ui/shared/ExpandableImage/optimize'
import { Scale } from '@ui/shared/ScaledImage'
import * as React from 'react'
import { useState, useEffect } from 'react'

import { Image, Loader, Root } from './elements'
import { store } from '@models'

interface Props {
  src: string
  className?: string

  height?: number
  width?: number
  maxWidth?: number
  maxHeight?: number
}

const ExpandableImage = (props: Props) => {
  const { className, src: url } = props
  const scale = new Scale(props)
  const [loadState, setLoadState] = useState<'loaded' | 'error' | 'loading'>(
    null
  )

  useEffect(() => {
    const timer = setTimeout(() => !loadState && setLoadState('loading'), 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Root
      className={className || null}
      scale={scale}
      onClick={() => store.modal.openImage(url)}
    >
      <Image
        src={optimize({
          width: scale.width,
          height: scale.height,
          url
        })}
        onLoad={() => setLoadState('loaded')}
        onError={() => setLoadState('error')}
      />
      {loadState === 'loading' && <Loader />}
    </Root>
  )
}

export default ExpandableImage

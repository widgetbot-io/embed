import { OpenModal, OpenModalVariables } from '@queries/__generated__/OpenModal'
import OPEN_MODAL from '@queries/OpenModal.graphql'
import optimize from '@ui/shared/ExpandableImage/optimize'
import { Scale } from '@ui/shared/ScaledImage'
import * as React from 'react'
import { Mutation } from 'react-apollo'

import { Image, Loader, Root } from './elements'

interface Props {
  src: string
  className?: string

  height?: number
  width?: number
  maxWidth?: number
  maxHeight?: number
}

class ExpandableImage extends React.PureComponent<Props> {
  state = {
    type: null
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.state.type !== null) return

      this.setState({ type: 'loading' })
    }, 100)
  }

  render() {
    const { className, src: url } = this.props
    const scale = new Scale(this.props)

    return (
      <Mutation<OpenModal, OpenModalVariables> mutation={OPEN_MODAL}>
        {openModal => (
          <Root
            className={className || null}
            scale={scale}
            onClick={() =>
              openModal({ variables: { type: 'image', data: url } })
            }
          >
            <Image
              src={optimize({
                width: scale.width,
                height: scale.height,
                url
              })}
              onLoad={() => this.setState({ type: 'loaded' })}
              onError={() => this.setState({ type: 'error' })}
            />
            {this.state.type === 'loading' && <Loader />}
          </Root>
        )}
      </Mutation>
    )
  }
}

export default ExpandableImage

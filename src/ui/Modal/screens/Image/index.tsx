import * as React from 'react'

import { Root, OpenImage } from './elements'
import { Trans } from '@lingui/react'
import { Box, Close } from '@ui/Modal'
import { useObserver } from 'mobx-react-lite'
import { store } from '@models'

const Image = useObserver(() => {
  return (
    <Box>
      <Close onClick={store.modal.close} />

      <Root src={store.modal.data} />
      <OpenImage
        href={store.modal.data}
        target="_blank"
        onClick={store.modal.close}
      >
        <Trans id="Modal.openOriginal">Open original</Trans>
      </OpenImage>
    </Box>
  )
})

export default Image

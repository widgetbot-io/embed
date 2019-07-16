import { observer } from 'mobx-react-lite'
import * as _ from 'lodash'
import Spinner from 'react-spinkit'
import Loadable from 'react-loadable'
import { store } from '@models'

import * as React from 'react'
import Hotkeys from 'react-hot-keys'

import { Root } from './elements'
import { useCacheLoaded } from '@hooks'

const Modal = observer(() => {
  const Screen = Loadable({
    loader: () =>
      import(/* webpackMode: "lazy", webpackChunkName: "modal-screen-[index]" */ `./screens/${_.capitalize(
        store.modal.type
      )}`),
    loading: props =>
      props.pastDelay ? <Spinner name="ball-clip-rotate-multiple" /> : null
  })

  return (
    <Hotkeys keyName="escape" onKeyDown={store.modal.close}>
      <Root
        onClick={e =>
          e.target === e.currentTarget ? store.modal.close() : null
        }
        open={store.modal.isOpen}
        className="modal"
      >
        <Screen modal={store.modal} close={store.modal.close} />
      </Root>
    </Hotkeys>
  )
})

export default Modal
export { Box, Close, Content } from './elements'

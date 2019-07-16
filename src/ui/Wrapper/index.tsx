import * as React from 'react'
import { Wrapper as Root } from './elements'
import { observer } from 'mobx-react-lite'
import { store } from '@models'

const Wrapper = observer(({ children }) => (
  <Root
    onClick={() => {
      if (store.sidebar.isOpen && window.innerWidth < 520) {
        store.sidebar.toggle()
      }
    }}
    squashed={store.sidebar.isOpen}
    className="wrapper"
  >
    {children}
  </Root>
))

export default Wrapper

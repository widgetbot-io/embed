import * as React from 'react'
import { Wrapper as Root } from './elements'
import { observer } from 'mobx-react'
import { store } from '@models'

const Wrapper = observer(({ children, absolute }) => (
  <Root
    onClick={() => {
      if (store.sidebar.isOpen && window.innerWidth < 120) {
        store.sidebar.toggle()
      }
    }}
    squashed={store.sidebar.isOpen}
    className="wrapper"
    style={absolute ? {position: 'absolute'} : {}}
  >
    {children}
  </Root>
))

export default Wrapper

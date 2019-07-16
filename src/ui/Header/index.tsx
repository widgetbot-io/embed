import * as React from 'react'

import { Root } from './elements'
import Hamburger from './Hamburger'
import { store } from '@models'
import { observer } from 'mobx-react-lite'

const Header = observer(({ children }) => (
  <Root className="header">
    <Hamburger onClick={store.sidebar.toggle} open={store.sidebar.isOpen} />

    {children}
  </Root>
))

export default Header

export * from './elements'

import * as React from 'react'
import { Query } from 'react-apollo'

import Channels from './Channels'
import { Root } from './elements'
import Header from './Header'
import Panel from './Panel'
import { observer } from 'mobx-react-lite'
import { store } from '@models'

const Sidebar = observer(() => {
  return (
    <Root visible={store.sidebar.isOpen} className="sidebar">
      <Header />
      <Channels />
      <Panel />
    </Root>
  )
})

export default Sidebar

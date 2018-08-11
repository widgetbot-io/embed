import { SidebarVisibility } from '@queries/__generated__/SidebarVisibility'
import SIDEBAR_VISIBILITY from '@queries/SidebarVisibility.graphql'
import * as React from 'react'
import { Query } from 'react-apollo'

import Channels from './Channels'
import { Root } from './elements'
import Header from './Header'
import Panel from './Panel'

const Sidebar = () => (
  <Query<SidebarVisibility> query={SIDEBAR_VISIBILITY}>
    {({ data }) => (
      <Root visible={data.sidebar.open} className="sidebar">
        <Header />
        <Channels />
        <Panel />
      </Root>
    )}
  </Query>
)

export default Sidebar

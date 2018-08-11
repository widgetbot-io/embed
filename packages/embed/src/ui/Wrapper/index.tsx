import { SidebarVisibility } from '@queries/__generated__/SidebarVisibility'
import {
  ToggleSidebar,
  ToggleSidebarVariables
} from '@queries/__generated__/ToggleSidebar'
import SIDEBAR_VISIBILITY from '@queries/SidebarVisibility.graphql'
import TOGGLE_SIDEBAR from '@queries/ToggleSidebar.graphql'
import * as React from 'react'
import { Mutation, Query } from 'react-apollo'

import { Wrapper as Root } from './elements'

const Wrapper = ({ children }) => (
  <Query<SidebarVisibility> query={SIDEBAR_VISIBILITY}>
    {({ data }) => (
      <Mutation<ToggleSidebar, ToggleSidebarVariables>
        mutation={TOGGLE_SIDEBAR}
      >
        {toggle => (
          <Root
            onClick={() => {
              if (data.sidebar.open && window.innerWidth < 520) {
                toggle()
              }
            }}
            squashed={data.sidebar.open}
            className="wrapper"
          >
            {children}
          </Root>
        )}
      </Mutation>
    )}
  </Query>
)

export default Wrapper

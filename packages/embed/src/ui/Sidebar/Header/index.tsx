import Tooltip from 'rc-tooltip'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Route } from 'react-router'

import { ServerInfo, ServerInfoVariables } from './__generated__/ServerInfo'
import { Count, Icon, Name, Root } from './elements'
import GET_INFO from './GuildInfo.graphql'
import { Plural } from '@lingui/react'

const Header = () => (
  <Route path="/:server">
    {({ match }) => (
      <Query<ServerInfo, ServerInfoVariables>
        query={GET_INFO}
        variables={match.params}
        fetchPolicy="cache-first"
      >
        {({ loading, error, data }) => {
          if (loading || !data) return null
          if (error) return null

          return (
            <Root className="header">
              <Icon src={data.server.icon} className="icon" />
              <Name className="name">{data.server.name}</Name>
              <Tooltip
                placement="bottom"
                overlay={
                  <Plural
                    id="Header.memberCount"
                    value={data.server.memberCount}
                    one="# member in this server"
                    other="# members in this server"
                  />
                }
              >
                <Count className="count">{data.server.memberCount}</Count>
              </Tooltip>
            </Root>
          )
        }}
      </Query>
    )}
  </Route>
)

export default Header

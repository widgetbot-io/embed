import Tooltip from 'rc-tooltip'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Route } from 'react-router-dom'

import { GuildInfo, GuildInfoVariables } from '@generated'
import { Count, Icon, Name, Root } from './elements'
import GET_INFO from './GuildInfo.graphql'
import { Plural } from '@lingui/react'

const Header = () => (
  <Route path="/:guild">
    {({ match }) => (
      <Query<GuildInfo, GuildInfoVariables>
        query={GET_INFO}
        variables={match.params}
        fetchPolicy="cache-first"
      >
        {({ loading, error, data }) => {
          if (loading || !data || !data.guild) return null
          if (error) return null

          return (
            <Root className="header">
              <Icon src={data.guild.iconURL} className="icon" />
              <Name className="name">{data.guild.name}</Name>
              <Tooltip
                placement="bottom"
                overlay={
                  <Plural
                    id="Header.memberCount"
                    value={data.guild.memberCount}
                    one="# member in this server"
                    other="# members in this server"
                  />
                }
              >
                <Count className="count">{data.guild.memberCount}</Count>
              </Tooltip>
            </Root>
          )
        }}
      </Query>
    )}
  </Route>
)

export default Header

import Tooltip from 'rc-tooltip'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Route } from 'react-router-dom'

import { GuildInfo, GuildInfoVariables } from '@generated'
import { Count, Icon, Name, Root } from './elements'
import GET_INFO from './GuildInfo.graphql'
import { Plural } from '@lingui/react'
import { addNotification } from "notify";
import {store} from "@models";
import {Close} from "@ui/Sidebar/elements";

const Header = () => (
  <Route path="/:guild">
    {({ match }) => (
      <Query<GuildInfo, GuildInfoVariables>
        key="guild_info"
        query={GET_INFO}
        variables={match.params}
        fetchPolicy="cache-first"
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (!data || !data.guild)  {
            addNotification({
              level: 'error',
              title: 'Guild unavailable',
              message: 'This guild is not available.',
              autoDismiss: 0,

            });
            return null;
          }

          if (error) return null;

          if (window.innerWidth < 520) return (
              <Root className="header">
                <Icon src={data.guild.iconURL} className="icon" />
                <Name className="name">{data.guild.name}</Name>
                <Close onClick={store.sidebar.toggle} />
              </Root>
          )
          return (
            <Root className="header">
              <Icon src={data.guild.iconURL} className="icon" />
              <Name className="name">{data.guild.name}</Name>
              <Tooltip
                placement="bottom"
                overlay={
                  `${data.guild.memberCount === 1 ? `${data.guild.memberCount} member in this server.` : `${data.guild.memberCount} members in this server.`}`
                }
              >
                <Count className="count">{data.guild.memberCount}</Count>
              </Tooltip>
              <Close onClick={store.sidebar.toggle} />
            </Root>
          )
        }}
      </Query>
    )}
  </Route>
)

export default Header

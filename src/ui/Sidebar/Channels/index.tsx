import React from 'react'
import { Route } from 'react-router-dom'
import { Query } from 'react-apollo'
import { Channels, ChannelsVariables } from '@generated'
import { Selector } from '@ui/SelectItem'

import { Root } from './elements'
import Category from './Category'
import categorise, { ICategory } from './categorise'
import CHANNELS from './Channels.graphql'

export const ITEM_ID = 'channel'

const ChannelSwitcher = () => (
  <Route path="/:guild/:channel?">
    {({
      match: {
        params: { guild, channel }
      }
    }) => (
      <Query<Channels, ChannelsVariables>
        query={CHANNELS}
        variables={{ guild }}
      >
        {({ loading, error, data }) => {
          const categories = new Array<ICategory>();
          console.log(data);
          if (!loading && !error) {
            const sorted = categorise(data.guild.channels as any);
            categories.push(...sorted)
          }

          return (
            <Root className="channels">
              <Selector itemID={ITEM_ID} />
              {categories.map((category, i) => (
                <Category key={i} category={category} activeChannel={channel} />
              ))}
            </Root>
          )
        }}
      </Query>
    )}
  </Route>
)

export default ChannelSwitcher

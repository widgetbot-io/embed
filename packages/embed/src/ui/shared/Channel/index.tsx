import { cx } from 'emotion'
import Tooltip from 'rc-tooltip'
import * as React from 'react'
import { Query } from 'react-apollo'
import Emoji from '@ui/shared/Emoji'

import {
  ChannelInfo,
  ChannelInfo_server_channel,
  ChannelInfoVariables
} from './__generated__/ChannelInfo'
import ChannelLink from './link'
import { Route } from 'react-router'
import CHANNEL_INFO from './ChannelInfo.graphql'

interface Props {
  id: string
  className?: string
  children: (channel: ChannelInfo_server_channel) => any
}

const Channel = ({ id: channel, children, className }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => (
      <Query<ChannelInfo, ChannelInfoVariables>
        query={CHANNEL_INFO}
        variables={{ server, channel }}
      >
        {({ error, loading, data }) => {
          const success = !error && !loading && data && data.server
          const name = success ? data.server.channel.name : 'deleted-channel'
          const category = success ? data.server.channel.category : null

          return (
            <Tooltip
              placement="top"
              overlay={<Emoji>{category || ''}</Emoji>}
              mouseLeaveDelay={0}
              trigger={category ? ['hover'] : []}
            >
              <span>
                <ChannelLink
                  id={channel}
                  className={cx('channel-link', className)}
                >
                  {children({
                    __typename: 'Channel',
                    name,
                    id: channel,
                    category
                  })}
                </ChannelLink>
              </span>
            </Tooltip>
          )
        }}
      </Query>
    )}
  </Route>
)

export default Channel

export { Hash } from './elements'
export { default as ChannelLink } from './link'

import { cx } from 'emotion'
import Tooltip from 'rc-tooltip'
import * as React from 'react'
import { Query } from 'react-apollo'
import Emoji from '@ui/shared/Emoji'

import { ChannelInfo, ChannelInfoVariables } from '@generated'
import ChannelLink from './link'
import CHANNEL_INFO from './ChannelInfo.graphql'

interface Props {
  id: string
  className?: string
  children: (
    channel: {
      name: string
      id: string
      category: string
    }
  ) => any
}

const Channel = ({ id: channel, children, className }: Props) => (
  <Query<ChannelInfo, ChannelInfoVariables>
    query={CHANNEL_INFO}
    variables={{ channel }}
  >
    {({ error, loading, data }) => {
      let name = 'deleted-channel'
      let category: string = null

      if (
        !error &&
        !loading &&
        data &&
        data.channel &&
        data.channel.__typename === 'TextChannel'
      ) {
        name = data.channel.name

        if (data.channel.parent) category = data.channel.parent.name
      }

      return (
        <Tooltip
          placement="top"
          overlay={<Emoji>{category || ''}</Emoji>}
          mouseLeaveDelay={0}
          trigger={category ? ['hover'] : []}
        >
          <span>
            <ChannelLink id={channel} className={cx('channel-link', className)}>
              {children({
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
)

export default Channel

export { Hash } from './elements'
export { default as ChannelLink } from './link'

import { cx } from 'emotion'
import Tooltip from 'rc-tooltip'
import Emoji from '@ui/shared/Emoji'

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
    <Tooltip
        placement="top"
        overlay={<Emoji>{''}</Emoji>}
        mouseLeaveDelay={0}
        trigger={[]}
    >
          <span>
            <ChannelLink id={channel} className={cx('channel-link', className)}>
              {children({
                  name: channel,
                  id: channel,
                  category: 'category && category.name'
              })}
            </ChannelLink>
          </span>
    </Tooltip>
);

export default Channel

export * from './elements'
export { default as ChannelLink } from './link'

/*
<Query<ChannelInfo, ChannelInfoVariables>
    key={`channel_info:${channel}`}
    query={CHANNEL_INFO}
    variables={{ channel }}
  >
    {({ error, loading, data }) => {
      let name = 'deleted-channel';
      let category: ChannelInfo_channel_TextChannel_category = null;

      if (
        !error &&
        !loading &&
        data &&
        data.channel &&
        data.channel.__typename === 'TextChannel'
      ) {
        name = data.channel.name;

        if (data.channel.category) category = data.channel.category;
      }

      return (
        <Tooltip
          placement="top"
          overlay={<Emoji>{category && category.name || ''}</Emoji>}
          mouseLeaveDelay={0}
          trigger={category && category.name ? ['hover'] : []}
        >
          <span>
            <ChannelLink id={channel} className={cx('channel-link', className)}>
              {children({
                name,
                id: channel,
                category: category && category.name
              })}
            </ChannelLink>
          </span>
        </Tooltip>
      )
    }}
  </Query>
 */

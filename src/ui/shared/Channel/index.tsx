import { cx } from 'emotion'
import Tooltip from 'rc-tooltip'
import Emoji from '@ui/shared/Emoji'

import ChannelLink from './link'
import CHANNEL_INFO from './ChannelInfo.graphql'
import { Message_mentions } from '@generated'
import { generalStore } from '@store'

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
  data?: Message_mentions
}

const categoryName = (channelID: string) => generalStore.channels.find(ctg => ctg.channels.some(c => c.id === channelID))?.name

const Channel = ({ id, children, className, data }: Props) => (
    <Tooltip
        placement="top"
        overlay={<Emoji>{categoryName(id)}</Emoji>}
        mouseLeaveDelay={0}
        trigger={categoryName(id) ? ['hover'] : []}
    >
          <span>
            <ChannelLink id={id} className={cx('channel-link', className)}>
              {children({
                  name: data?.name || generalStore.channels.flatMap(ctg => ctg.channels).find(c => c.id === id)?.name || 'deleted-channel',
                  id: id,
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

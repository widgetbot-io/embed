import { Messages_channel_TextChannel_messages_TextMessage_reactions } from '@generated'
import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Count, Emoji, Root } from './elements'

type Props = Messages_channel_TextChannel_messages_TextMessage_reactions

class Reaction extends React.Component<Props> {
  render() {
    const { emoji, count } = this.props

    return (
      <Tooltip
        placement="top"
        overlay={`:${emoji.name}:`}
        mouseEnterDelay={0.5}
      >
        <span>
          <Root className="reaction">
            {emoji.__typename === 'CustomEmoji' ? (
              <Emoji src={emoji.url} />
            ) : (
              <Emoji className="reaction-emoji">{emoji.utf8}</Emoji>
            )}
            <Count className="reaction-count">{count}</Count>
          </Root>
        </span>
      </Tooltip>
    )
  }
}

export default Reaction

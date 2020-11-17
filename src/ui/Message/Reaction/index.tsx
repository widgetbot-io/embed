import { Message_TextMessage_reactions } from '@generated'
import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Count, Emoji, Root } from './elements'

type Props = Message_TextMessage_reactions

class Reaction extends React.Component<Props> {
  render() {
    const { url, name, count } = this.props

    return (
      <Tooltip
        placement="top"
        overlay={`:${name}:`}
        mouseEnterDelay={0.5}
      >
        <span>
          <Root className="reaction">
            {url ? (
              <Emoji src={url} />
            ) : (
              <Emoji className="reaction-emoji">{name}</Emoji>
            )}
            <Count className="reaction-count">{count}</Count>
          </Root>
        </span>
      </Tooltip>
    )
  }
}

export default Reaction

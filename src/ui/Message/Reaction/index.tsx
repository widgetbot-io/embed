import { Message_reactions } from '@generated'
import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Count, Emoji, Root } from './elements'

type Props = Message_reactions

class Reaction extends React.Component<Props> {
  render() {
    const { emojiName, count } = this.props // TODO: Create the url item
    const url: string | undefined = undefined

    return (
      <Tooltip
        placement="top"
        overlay={`:${emojiName}:`}
        mouseEnterDelay={0.5}
      >
        <span>
          <Root className="reaction">
            {url ? (
              <Emoji src={url} />
            ) : (
              <Emoji className="reaction-emoji">{emojiName}</Emoji>
            )}
            <Count className="reaction-count">{count}</Count>
          </Root>
        </span>
      </Tooltip>
    )
  }
}

export default Reaction

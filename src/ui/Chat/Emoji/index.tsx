import * as React from 'react'

import { Emoji, Root } from './elements'
import randomEmoji from './random'

class EmojiPanel extends React.PureComponent {
  render() {
    return (
      <Root className="emoji">
        <Emoji
          onMouseEnter={() => this.mouseEnter()}
          onClick={() => console.log(1)}
        >
          {this.state.emoji}
        </Emoji>
      </Root>
    )
  }

  state = {
    emoji: randomEmoji()
  }

  mouseEnter = () =>
    this.setState({
      emoji: randomEmoji()
    })
}

export default EmojiPanel

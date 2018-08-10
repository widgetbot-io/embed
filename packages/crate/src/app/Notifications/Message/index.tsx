import * as React from 'react'
import { Transition } from 'react-transition-group'

import { Notification } from '../../../types/store'
import { Avatar, Content, Root } from './elements'
import { defaultAvatar } from './util'

class Message extends React.PureComponent<Notification & { in?: boolean }> {
  render() {
    const { avatar, content } = this.props

    return (
      <Transition in={this.props.in} timeout={200} unmountOnExit>
        {state => (
          <Root className={`notification ${state}`}>
            <Avatar src={avatar || defaultAvatar} className="avatar" />
            <Content source={content} className="content" />
          </Root>
        )}
      </Transition>
    )
  }
}

export default Message

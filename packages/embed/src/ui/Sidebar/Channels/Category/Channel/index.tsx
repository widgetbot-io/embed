import * as React from 'react'

import { Hashtag, Name, Pings, Root } from './elements'

interface Props {
  unread: boolean
  name: string
  id: string
  order: number
  selected: boolean
}

const Channel = (props: Props) => (
  <Root {...props} className="channel">
    <Hashtag className="hash" />
    <Name className="name">{props.name}</Name>
    {false && <Pings className="pings">1</Pings>}
  </Root>
)

export default Channel

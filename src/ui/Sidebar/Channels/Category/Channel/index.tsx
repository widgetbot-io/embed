import * as React from 'react'
import { ITEM_ID } from '@ui/Sidebar/Channels'

import { Hashtag, Name, Pings, Root } from './elements'

interface Props {
  unread: boolean
  name: string
  id: string
  order: number
  selected: boolean
}

const Channel = (props: Props) => (
  <Root {...props} itemID={ITEM_ID} className="channel">
    <Hashtag className="hash" />
    <Name className="name">{props.name}</Name>
    {false && <Pings className="pings">1</Pings>}
  </Root>
)

export default Channel

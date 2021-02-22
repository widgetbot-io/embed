import * as React from 'react'
import Markdown from '@ui/shared/markdown/render'

import { Root, Top, Title, Close, Body, Emoji } from './elements'
import { observer } from 'mobx-react'
import { store } from '@models'


const Topic = observer(() => {
  return (
    <Root>
      <Top>
        <Title>#<Emoji>{store.modal.channel}</Emoji></Title>
        <Close onClick={store.modal.close} />
      </Top>
      <Body>
        <Markdown>{store.modal.data}</Markdown>
      </Body>
    </Root>
  )
})

export default Topic

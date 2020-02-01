import * as React from 'react'
import Markdown from '@ui/shared/markdown/render'

import { Root, Top, Title, Close, Body } from './elements'
import { observer } from 'mobx-react'
import { store } from '@models'


const Topic = observer(() => {
  return (
    <Root>
      <Top>
        <Title>#{store.modal.channel}</Title>
        <Close onClick={store.modal.close} />
      </Top>
      <Body>
        <Markdown>{store.modal.data}</Markdown>
      </Body>
    </Root>
  )
})

export default Topic

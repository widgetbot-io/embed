import * as React from 'react'
import Markdown from '@ui/shared/markdown/render'

import { Root, Inner, Avatar, Text, Bold, Discrim, UnderNick, Tag } from './elements'
import { observer } from 'mobx-react'
import { store } from '@models'
import gifCheck from '@ui/shared/gifCheck'
import { Close } from '@ui/Modal'

const Profile = observer(() => {
  return (
    <Root>
        <Close onClick={store.modal.close}/>
        <Inner>
            <Avatar src={gifCheck(store.modal.avatar)}></Avatar>
            {!store.modal.displayName || store.modal.displayName === store.modal.username ?
                <Text>
                    <Bold>{store.modal.username}</Bold>
                    {store.modal.discriminator!=='0000' ? <Discrim>#{store.modal.discriminator}</Discrim> : null}
                    {store.modal.tag ? <Tag>{store.modal.tag}</Tag> : null}
                </Text>
            :
                <Text>
                    <Bold>{store.modal.displayName}</Bold> {store.modal.tag ? <Tag>{store.modal.tag}</Tag> : null}<br/>
                    <UnderNick>{store.modal.username}#{store.modal.discriminator}</UnderNick>
                </Text>
            }
        </Inner>
    </Root>
  )
})

export default Profile

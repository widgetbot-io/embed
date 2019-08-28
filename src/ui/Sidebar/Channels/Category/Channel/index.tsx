import * as React from 'react'
import { ITEM_ID } from '@ui/Sidebar/Channels'

import {Hashtag, Name, Pings, Root, Newstag, Storetag} from './elements'

interface Props {
    unread: boolean
    name: string
    id: string
    order: number
    selected: boolean
    nsfw: boolean
    __typename: string
}
class Channel extends React.PureComponent<Props> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Root {...this.props} itemID={ITEM_ID} className="channel">
                { (() => {
                    switch(this.props.__typename) {
                        case 'NewsChannel': {
                            return <Newstag className="news" />;
                        }
                        case 'StoreChannel': {
                            return <Storetag className="store" />;
                        }
                        case 'TextChannel': {
                            return <Hashtag className="hash" />;
                        }
                    }
                })()}
                <Name className="name">{this.props.name}</Name>
                <Pings className="pings">0</Pings>
            </Root>
        );
    }
}

export default Channel

import * as React from 'react'
import { ITEM_ID } from '@ui/Sidebar/Channels'

import {Hashtag, Name, Pings, Root, Newstag, Storetag} from './elements'
import {inject, observer} from "mobx-react";
import { AuthStore } from '@store/auth';

interface Props {
    unread: boolean,
    name: string,
    id: string,
    order: number,
    selected: boolean,
    nsfw: boolean,
    __typename: string,
    AuthStore?: AuthStore,
    pings: number
}

@inject('AuthStore')
@observer
class Channel extends React.PureComponent<Props> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Root {...this.props} itemID={ITEM_ID} className="channel">
                {(() => {
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
                {(() => {
                    if (this.props.pings > 0) return <Pings className="pings">{this.props.pings}</Pings>;
                })()}
            </Root>
        );
    }
}

export default Channel

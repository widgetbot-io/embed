import * as React from 'react'
import { ITEM_ID } from '@ui/Sidebar/Channels'

import {Hashtag, Name, Emoji, Pings, Root, Newstag, Storetag, NSFWTag, WIP} from './elements'
import {inject, observer} from "mobx-react";
import { AuthStore } from '@store/auth';
import {NEW_MESSAGES, useRouter} from "@hooks";
import {useSubscription} from "react-apollo-hooks";

interface Props {
    unread: boolean,
    name: string,
    id: string,
    order: number,
    selected: boolean,
    nsfw: boolean,
    __typename: string,
    pings: number
}

@observer
class Channel extends React.PureComponent<Props> {
    render() {
        const nameLength = this.props.__typename === 'StoreChannel' ? 10 : 13;
        const name = this.props.name.length > nameLength ? `${this.props.name.slice(0, nameLength)}...` : this.props.name;
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
                            return this.props.nsfw ? <NSFWTag className="nsfw" /> : <Hashtag className="hash" />;
                        }
                    }
                })()}
                <Name className="name"><Emoji>{name}</Emoji> {this.props.__typename === 'StoreChannel' ? <WIP>WIP</WIP> : null}</Name>
                {(() => {
                    if (this.props.pings > 0) return <Pings className="pings">{this.props.pings}</Pings>;
                })()}
            </Root>
        );
    }
}

export default Channel

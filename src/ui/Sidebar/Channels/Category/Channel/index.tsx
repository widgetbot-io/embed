import * as React from 'react'
import { ITEM_ID } from '@ui/Sidebar/Channels'

import {Hashtag, Name, Emoji, Pings, Root, Newstag, Storetag, NSFWTag, NSFWNewstag, WIP, Rulestag} from './elements'
import {inject, observer} from "mobx-react";
import { generalStore } from '@store';

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
        return (
            <Root id={this.props.id} selected={this.props.selected} unread={this.props.unread} order={this.props.order} itemID={ITEM_ID} className="channel">
                {(() => {
                    if (this.props.id === generalStore.guild?.rulesChannelId) return <Rulestag className="rules" />
                    switch(this.props.__typename) {
                        case 'NewsChannel': {
                            return this.props.nsfw ? <NSFWNewstag className="nsfwnews" /> : <Newstag className="news" />;
                        }
                        case 'StoreChannel': {
                            return <Storetag className="store" />;
                        }
                        case 'TextChannel': {
                            return this.props.nsfw ? <NSFWTag className="nsfw" /> : <Hashtag className="hash" />;
                        }
                    }
                })()}
                <Name className="name"><Emoji>{this.props.name}</Emoji> {this.props.__typename === 'StoreChannel' ? <WIP>WIP</WIP> : null}</Name>
                {(() => {
                    if (this.props.pings > 0) return <Pings className="pings">{this.props.pings}</Pings>;
                })()}
            </Root>
        );
    }
}

export default Channel

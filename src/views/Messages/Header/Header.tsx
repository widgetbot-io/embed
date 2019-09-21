import * as React from 'react'
import Tooltip from 'rc-tooltip'
import CHANNEL from './Channel.graphql'
import { Name, Topic, Join, Stretch } from '@ui/Header'

import { Root } from './elements'
import { Trans } from '@lingui/react'
import { store } from '@models'
import { useQuery } from 'react-apollo-hooks'
import GET_INFO from "@ui/Sidebar/Header/GuildInfo.graphql";
import {AuthStore} from "@store/auth";
import {Auth} from "@ui/Sidebar/Panel/elements";
import {observer} from "mobx-react";

const defaultInvite = 'https://discord.gg/56VgJZ4';

export interface HeaderProps {
  channel: string,
  guild: string,
  AuthStore?: AuthStore
}

export const Header = observer( ({ channel, guild, AuthStore }: HeaderProps) => {
    const { data: cData } = useQuery(CHANNEL, {
        variables: { channel },
        fetchPolicy: 'cache-first',
        suspend: true
    });
    const { data: gData } = useQuery(GET_INFO, {
        variables: { guild },
        fetchPolicy: 'cache-first',
        suspend: true
    });

    const invite = gData.guild ? gData.guild.invite : defaultInvite;

    return (
        <Root>
            <Stretch>
                <Name>{cData.channel.name}</Name>
                {(() => {
                    return window.innerWidth < 520 ? (
                        <Auth
                            className="auth"
                            target="_blank"
                            onClick={onClick.bind({props: {AuthStore}})}
                        >
                            <React.Fragment>
                                {AuthStore.user ? 'Logout' : 'Login'}
                            </React.Fragment>
                        </Auth>
                    ) : (
                        <Topic
                            onClick={() => store.modal.openTopic(cData.channel.topic)}
                            className="topic"
                        >
                            {cData.channel.topic}
                        </Topic>
                    )
                })()}
            </Stretch>
            <Tooltip placement="bottom" overlay="Open in Discord app">
                <Join
                    className="join"
                    href={invite}
                    target="_blank"
                    // TODO: Fix join button
                    // onClick={this.join}
                >
                    Join on Discord
                </Join>
            </Tooltip>
        </Root>
    )
});

function onClick(e: React.MouseEvent<HTMLAnchorElement>)  {
    this.props.AuthStore.user ? logout.call(this) : login.call(this) ;
}
function login() {
    this.props.AuthStore.login().then(async r => {
        await this.props.AuthStore.fetchUser();
        this.props.AuthStore.needsUpdate = true;
        // await this.props.AuthStore.refreshChannels();
    });
}
function logout() {
    this.props.AuthStore.logout();
    this.props.AuthStore.needsUpdate = true;
}



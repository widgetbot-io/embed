import * as React from 'react'
import Tooltip from 'rc-tooltip'
import CHANNEL from './Channel.graphql'
import { Name, Emoji, Topic, Join, Stretch } from '@ui/Header'

import { Root } from './elements'
import { Locale } from "@lib/Locale"
import { store } from '@models'
import { useQuery } from 'react-apollo-hooks'
import GET_INFO from "@ui/Sidebar/Header/GuildInfo.graphql";
import {AuthStore} from "@store/auth";
import {Auth} from "@ui/Sidebar/Panel/elements";
import {observer} from "mobx-react";

export interface HeaderProps {
  channel: string,
  guild: string,
  AuthStore?: AuthStore
}

export const Header = observer(({ channel, guild, AuthStore }: HeaderProps) => {
    const { data: cData } = useQuery(CHANNEL, {
        variables: { channel },
        fetchPolicy: 'cache-first'
    });
    const { data: gData } = useQuery(GET_INFO, {
        variables: { guild },
        fetchPolicy: 'cache-first'
    });

    const invite = gData.guild && gData.guild.invite;

    return (
        <Root>
            <Stretch>
                <Name><Emoji>{cData.channel && cData.channel.name}</Emoji></Name>
                {window.innerWidth < 520 ? null : (
                        <Topic
                            onClick={() => store.modal.openTopic(cData.channel.topic, cData.channel.name)}
                            className="topic"
                        >
                            {cData.channel && cData.channel.topic}
                        </Topic>
                    )}
            </Stretch>
            {invite ? <Tooltip placement="bottom" overlay={Locale.translate('frontend.opendiscord.tooltip')}>
                    <Join
                        className="join"
                        href={invite}
                        target="_blank"
                        // TODO: Fix join button
                        // onClick={this.join}
                    >
                        {Locale.translate('frontend.opendiscord')}
                    </Join>
                </Tooltip> : null}
        </Root>
    )
});

export function onClick(e: React.MouseEvent<HTMLAnchorElement>)  {
    this.props.AuthStore.guestEnabled
        ? (this.props.AuthStore.user ? logout.call(this) : this.props.AuthStore.toggleMenu(true))
        : (this.props.AuthStore.user ? logout.call(this) : login.call(this))
}

export function login() {
    this.props.AuthStore.discordLogin().then(async r => {
        await this.props.AuthStore.fetchDiscordUser();
        this.props.AuthStore.needsUpdate = true;
        // await this.props.AuthStore.refreshChannels();
    });
}


export function logout() {
    this.props.AuthStore.logout();
    this.props.AuthStore.needsUpdate = true;
}

export const Fallback = () => (
  <Root>
    <Stretch>
      <Name>Loading...</Name>
    </Stretch>
  </Root>
);

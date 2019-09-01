import * as React from 'react'
import Tooltip from 'rc-tooltip'
import CHANNEL from './Channel.graphql'
import { Name, Topic, Join, Stretch } from '@ui/Header'

import { Root } from './elements'
import { Trans } from '@lingui/react'
import { store } from '@models'
import { useQuery } from 'react-apollo-hooks'
import GET_INFO from "@ui/Sidebar/Header/GuildInfo.graphql";
import {LoginButton} from "@ui/Sidebar/Panel";
import {AuthStore} from "@store/auth";

const defaultInvite = 'https://discord.gg/56VgJZ4';

export interface HeaderProps {
  channel: string,
  guild: string,
  AuthStore?: AuthStore
}

export const Header = ({ channel, guild, AuthStore }: HeaderProps) => {
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

    const invite = gData.guild.invite ? gData.guild.invite : defaultInvite;

  return (
    <Root>
      <Stretch>
        <Name>{cData.channel.name}</Name>
          {(() => {
              return window.innerWidth < 520 ? (
                 <LoginButton AuthStore={AuthStore} />
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
}

Header.Fallback = () => (
  <Root>
    <Stretch>
      <Name>Loading...</Name>
    </Stretch>
  </Root>
)

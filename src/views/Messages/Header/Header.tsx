import * as React from 'react'
import Tooltip from 'rc-tooltip'
import CHANNEL from './Channel.graphql'
import { Name, Topic, Join, Stretch } from '@ui/Header'

import { Root } from './elements'
import { Trans } from '@lingui/react'
import { store } from '@models'
import { useQuery } from 'react-apollo-hooks'

const defaultInvite = 'https://discord.gg/56VgJZ4';

export interface HeaderProps {
  channel: string
}

export const Header = ({ channel }: HeaderProps) => {
  const { data } = useQuery(CHANNEL, {
    variables: { channel },
    fetchPolicy: 'cache-first',
    suspend: true
  })

  return (
    <Root>
      <Stretch>
        <Name>{data.channel.name}</Name>

        <Topic
          onClick={() => store.modal.openTopic(data.channel.topic)}
          className="topic"
        >
          {data.channel.topic}
        </Topic>
      </Stretch>
      <Tooltip placement="bottom" overlay="Open in Discord app">
        <Join
          className="join"
          href={defaultInvite}
          target="_blank"
          // TODO: Fix join button
          // onClick={this.join}
        >
          <Trans id="Header.joinDiscord">Join on Discord</Trans>
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

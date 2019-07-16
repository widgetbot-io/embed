import * as React from 'react'
import Wrapper from '@ui/Wrapper'
import { Header } from './Header'
import { RouteComponentProps } from 'react-router-dom'
import { Chat } from '@ui/Chat'
import { Messages } from './Messages'
import { Loading } from '@ui/Overlays'

type MessageProps = RouteComponentProps<{
  guild: string
  channel: string
}>

export const MessagesView = ({ match }: MessageProps) => {
  return (
    <Wrapper>
      <React.Suspense fallback={<Header.Fallback />}>
        <Header channel={match.params.channel} />
      </React.Suspense>

      <React.Suspense fallback={<Loading />}>
        <Messages guild={match.params.guild} channel={match.params.channel} />
      </React.Suspense>
      <Chat />
    </Wrapper>
  )
}

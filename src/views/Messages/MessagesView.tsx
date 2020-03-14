import * as React from 'react'
import Wrapper from '@ui/Wrapper'
import { Header, Fallback } from './Header'
import { RouteComponentProps } from 'react-router-dom'
import { Chat } from '@ui/Chat'
import { Messages } from './Messages'
import { Loading } from '@ui/Overlays'
import {inject, observer} from "mobx-react";
import {AuthStore} from "@store/auth";

type MessageProps = RouteComponentProps<{
  guild: string
  channel: string
}>

interface Props {
    match: {
        params: {
            channel: string,
            guild: string // TODO: lmao
        }
    }
}

@observer
export class MessagesView extends React.PureComponent<Props> {
 render() {
     return (
         <Wrapper>
             <React.Suspense fallback={<Fallback />}>
                 <Header channel={this.props.match.params.channel} guild={this.props.match.params.guild}/>
             </React.Suspense>

             <React.Suspense fallback={<Loading />}>
                 <Messages guild={this.props.match.params.guild} channel={this.props.match.params.channel} />
             </React.Suspense>
             <Chat />
         </Wrapper>
     )
 }
}

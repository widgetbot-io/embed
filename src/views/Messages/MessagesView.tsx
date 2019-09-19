import * as React from 'react'
import Wrapper from '@ui/Wrapper'
import { Header } from './Header'
import { RouteComponentProps } from 'react-router-dom'
import { Chat } from '@ui/Chat'
import { Messages } from './Messages'
import { Loading } from '@ui/Overlays'
import {inject, observer} from "mobx-react";
import {AuthStore} from "@store/auth";
import {Root} from "@views/Messages/Header/elements";
import {Name, Stretch} from "@ui/Header";

type MessageProps = RouteComponentProps<{
  guild: string
  channel: string
}>

interface Props {
    AuthStore?: AuthStore
    match: {
        params: {
            channel: string,
            guild: string // TODO: lmao
        }
    }
}

const Fallback = () => (
    <Root>
        <Stretch>
            <Name>Loading...</Name>
        </Stretch>
    </Root>
)

@inject('AuthStore')
@observer
export class MessagesView extends React.PureComponent<Props> {
 render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
     return (
         <Wrapper>
             <React.Suspense fallback={<Fallback />}>
                 <Header channel={this.props.match.params.channel} guild={this.props.match.params.guild} AuthStore={this.props.AuthStore}/>
             </React.Suspense>

             <React.Suspense fallback={<Loading />}>
                 <Messages guild={this.props.match.params.guild} channel={this.props.match.params.channel} />
             </React.Suspense>
             <Chat />
         </Wrapper>
     )
 }
}

import * as React from 'react'
import { Query } from 'react-apollo'
import { useState } from 'react';
import Channels from './Channels'
import { Root } from './elements'
import Header from './Header'
import Panel from './Panel'
import {inject, observer} from 'mobx-react'
import { store } from '@models'
import {AuthStore} from "@store/auth";
import {NEW_MESSAGES, useRouter} from "@hooks";
import {Subscription} from "react-apollo";

interface Props {
    AuthStore?: AuthStore
}

@observer
class Sidebar extends React.PureComponent<{}> {
    render() {
        return (
            <Root visible={store.sidebar.isOpen} className="sidebar">
                <Header />
                <Channels />
                <Panel />
            </Root>
        )
    }
}

export default Sidebar

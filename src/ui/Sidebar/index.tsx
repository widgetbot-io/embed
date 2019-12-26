import * as React from 'react'
import Channels from './Channels'
import {Root, Close} from './elements'
import Header from './Header'
import Panel from './Panel'
import {observer} from 'mobx-react'
import {store} from '@models'

const Sidebar = observer(() => (
    <Root visible={store.sidebar.isOpen} className="sidebar">
        <Header />
        <Channels />
        <Panel />
    </Root>
));


export default Sidebar

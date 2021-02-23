import { Root, SingleChannel, Inner } from './elements'
import Hamburger from './Hamburger'
import { store } from '@models'
import { observer } from 'mobx-react'
import { Header as ServerInfo } from '@ui/Sidebar/Header'


const Header = observer(({ children }) => (
  <Root className="header">
    <SingleChannel>
      <ServerInfo />
    </SingleChannel>
    <Inner>
      <Hamburger
        onClick={e => {
          e.stopPropagation();
          store.sidebar.toggle();
        }}
        open={store.sidebar.isOpen}
      />
      {children}
    </Inner>
  </Root>
))

export default Header

export * from './elements'

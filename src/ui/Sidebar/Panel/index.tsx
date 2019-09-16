import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Root, Settings, Version, Auth } from './elements'
import { Trans } from '@lingui/react'
import { store } from '@models'
import Button from "@ui/shared/button";
import { inject, observer } from "mobx-react";
import { AuthStore } from "@store/auth";
import {CSSProperties} from "react";

const { version } = require('../../../../package.json');

interface Props {
  AuthStore?: AuthStore
}

@inject('AuthStore')
@observer
export default class Panel extends React.Component<Props> {
  onClick(e: React.MouseEvent<HTMLAnchorElement>)  {
    this.props.AuthStore.user ? this.logout() : this.login();
  };
  login() {
    this.props.AuthStore.login().then(async r => {
      await this.props.AuthStore.fetchUser();
      this.props.AuthStore.needsUpdate = true;
      // await this.props.AuthStore.refreshChannels();
    });
  }
  logout() {
    this.props.AuthStore.logout();
    this.props.AuthStore.needsUpdate = true;
  }

  render(): React.ReactNode {
    //  <LoginButton AuthStore={this.props.AuthStore}/>
    //  {window.innerWidth > 520 ? (this.props.AuthStore.user ? `Logged in as ${this.props.AuthStore.user.username}` : undefined) : undefined}
    return (
      <Root className="panel">
        <Auth
          className="auth"
          target="_blank"
          onClick={this.onClick.bind(this)}
        >
          <React.Fragment>
            {this.props.AuthStore.user ? 'Logout' : 'Login'}
          </React.Fragment>
        </Auth>
        {
          /* <Tooltip
             placement="top"
             overlay={<Trans id="Panel.settings">Settings</Trans>}
           >
             <Settings onClick={store.modal.openSettings} />
              <Tooltip
                   placement="top"
                   overlay={<Trans id="Panel.about">About</Trans>}
                 >
                   <Version
                     href={`https://disweb.deploys.io`}
                     target="_blank"
                     onClick={e => {
                       e.preventDefault()
                       // openModal({ variables: { type: 'settings', data: null } })
                     }}
                   >
                     {`v${version}`}
                   </Version>
                 </Tooltip> */
        }
      </Root>
    )
  }
}


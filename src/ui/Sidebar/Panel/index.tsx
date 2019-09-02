import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Root, Settings, Version } from './elements'
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

@observer
export class LoginButton extends React.Component<Props> {
  private readonly style: CSSProperties = {
    border: '1px solid white',
    borderRadius: '5px',
    padding: '5px',
    marginLeft: '5px'
  };
  onClick: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.AuthStore.user ? this.logout() : this.login();
  };
  login() {
    this.props.AuthStore.login().then(async r => {
      await this.props.AuthStore.fetchUser();
      await this.props.AuthStore.refreshChannels();
    });
  }
  logout() {
    this.props.AuthStore.logout();
    this.props.AuthStore.refreshChannels();
  }
  render(): React.ReactNode {
    return (
        <React.Fragment>
          {window.innerWidth > 520 ? (this.props.AuthStore.user ? `Logged in as ${this.props.AuthStore.user.username}` : undefined) : undefined}
          <button onClick={this.onClick} style={this.style} > {this.props.AuthStore.user ? 'Logout' : 'Login'} </button>
        </React.Fragment>
    )
  }
}


@inject('AuthStore')
@observer
export default class Panel extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Root className="panel">
        <LoginButton AuthStore={this.props.AuthStore}/>
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


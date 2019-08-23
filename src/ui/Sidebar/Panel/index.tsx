import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Root, Settings, Version } from './elements'
import { Trans } from '@lingui/react'
import { store } from '@models'
import Button from "@ui/shared/button";
import { inject, observer } from "mobx-react";
import { AuthStore } from "../../../stores/auth";
import {CSSProperties} from "react";

const { version } = require('../../../../package.json');

interface Props {
  AuthStore?: AuthStore
}

class LoginButton extends React.Component<Props> {
  private readonly style: CSSProperties = {
    border: '1px solid white',
    borderRadius: '5px',
    padding: '5px',
    marginLeft: '5px'
  };
  onClick: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.AuthStore.login().then(async r => {
      await this.props.AuthStore.fetchUser();
      await this.props.AuthStore.refreshChannels();
    });
  };
  render(): React.ReactNode {
    return (
        <React.Fragment>
          <button onClick={this.onClick} style={this.style} > Login </button>
        </React.Fragment>
    )
  }
}

class LogoutButton extends React.Component<Props> {
  private readonly style: CSSProperties = {
    border: '1px solid white',
    borderRadius: '5px',
    padding: '5px',
    marginLeft: '5px'
  };
  onClick: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.AuthStore.logout();
    this.props.AuthStore.refreshChannels();
  };
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <button onClick={this.onClick} style={this.style} > Logout </button>
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
        {this.props.AuthStore.user ? `Logged in as ${this.props.AuthStore.user.username}` : <LoginButton AuthStore={this.props.AuthStore}/>}
        {this.props.AuthStore.user ? <LogoutButton AuthStore={this.props.AuthStore}/> : undefined}
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


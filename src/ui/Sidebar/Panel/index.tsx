import * as React from 'react'

import {Auth, Developers, Root, Version} from './elements'
import {inject, observer} from "mobx-react";
import {AuthStore} from "@store/auth";
import {onClick} from "@views/Messages/Header";
import {Locale} from '@lib/Locale';
import {FiLogOut, FiLogIn} from 'react-icons/fi'
import Tooltip from 'rc-tooltip';
import {generalStore} from "@store";

const { version } = require('../../../../package.json');

console.log(`WidgetBot version: ${version}`)

interface Props {
	AuthStore?: AuthStore
}

@inject('AuthStore')
@observer
export default class Panel extends React.Component<Props> {
	onClick(e: React.MouseEvent<HTMLAnchorElement>)  {
		onClick.call({ props: { AuthStore: this.props.AuthStore }}, e)
	};

	render(): React.ReactNode {
		// const lastUpdate = localStorage.getItem('lastUpdate');
		// if (!lastUpdate || Semver.newMinorOrMajor(lastUpdate, version)) {
		// 	localStorage.setItem('lastUpdate', version);
		// 	this.props.AuthStore.logout();
		// 	this.props.AuthStore.needsUpdate = true;
		// }
		if (!localStorage.getItem('token')) {
			this.props.AuthStore.logout();
			generalStore.needsUpdate = true;
			localStorage.setItem('lastUpdate', version)
		}
		//  <LoginButton AuthStore={this.props.AuthStore}/>
		//  {window.innerWidth > 520 ? (this.props.AuthStore.user ? `Logged in as ${this.props.AuthStore.user.username}` : undefined) : undefined}
		return (
			<Root className="panel">
				<Developers>
					<Auth
						className="auth"
						target="_blank"
						onClick={this.onClick.bind(this)}
					>
						<React.Fragment>
							{this.props.AuthStore.user ? Locale.translate('frontend.auth.logout') : Locale.translate('frontend.auth.login')}
						</React.Fragment>
					</Auth>
				</Developers>
				<Version
					href={`https://widgetbot.io`}
					target="_blank"
					onClick={e => {
						e.preventDefault();
						// openModal({ variables: { type: 'settings', data: null } })
					}}
				>
					{`${version}`}
				</Version>
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

						   </Tooltip> */
				}
			</Root>
		)
	}
}

@inject('AuthStore')
@observer
export class SingleChannelAuth extends React.Component<Props> {
	onClick(e: React.MouseEvent<HTMLAnchorElement>)  {
		onClick.call({ props: { AuthStore: this.props.AuthStore }}, e)
	};

	render(): React.ReactNode {
		if (!localStorage.getItem('token')) {
			this.props.AuthStore.logout();
			generalStore.needsUpdate = true;
			localStorage.setItem('lastUpdate', version)
		}
		return (
			<Tooltip placement="bottom" overlay={this.props.AuthStore.user ? Locale.translate('frontend.auth.logout') : Locale.translate('frontend.auth.login')}>
				<Auth
					className="auth"
					target="_blank"
					onClick={this.onClick.bind(this)}
					style={{padding: '2px 0', minWidth: '28px'}}
				>
					<React.Fragment>
						{this.props.AuthStore.user ? <FiLogOut /> : <FiLogIn />}
					</React.Fragment>
				</Auth>
			</Tooltip>
		)
	}
}

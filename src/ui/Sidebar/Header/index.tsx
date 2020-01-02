import Tooltip from 'rc-tooltip'
import * as React from 'react'
import {Query} from 'react-apollo'
import {Route} from 'react-router-dom'

import {GuildInfo, GuildInfoVariables} from '@generated'
import {BannerName, BannerRoot, Count, Icon, Name, Root} from './elements'
import { AuthStore } from "@store/auth";
import GET_INFO from './GuildInfo.graphql'
import {addNotification} from "notify";
import {store} from "@models";
import {Close} from "@ui/Sidebar/elements";
import webpCheck from '@ui/shared/webpCheck'
import {inject, observer} from "mobx-react";

interface Props {
  AuthStore?: AuthStore
}

@inject('AuthStore')
@observer
export class Header extends React.Component<Props, any> {
	render() {
		return (
			<Route path="/:guild">
				{({match}) => (
					<Query<GuildInfo, GuildInfoVariables>
						key={`guild_info:${match.params.guild}`}
						query={GET_INFO}
						variables={match.params}
						fetchPolicy="cache-first"
					>
						{({loading, error, data}) => {
							if (loading) return null;
							if (!data || !data.guild) {
								addNotification({
									level: 'error',
									title: 'Guild unavailable',
									message: 'This guild is not available.',
									autoDismiss: 0,

								});
								return null;
							}
							if (error) return null;

							let icon = data.guild.iconURL;

							if (icon.includes('a_')) {
								icon = icon.replace('jpg', 'gif?size=64')
							} else {
								icon = webpCheck(icon.replace('jpg', 'webp?size=64'))
							}

							this.props.AuthStore.toggleGuest(data.guild.settings.guestMode);
							this.props.AuthStore.toggleRead(data.guild.settings.readonly);

							if (data.guild.bannerURL) {

								let banner = webpCheck(data.guild.bannerURL);

								if (window.innerWidth < 520) return (
									<BannerRoot className="header" backgroundImage={banner}>
										<Icon src={icon} className="icon"/>
										<BannerName className="name">{data.guild.name}</BannerName>
										<Close onClick={store.sidebar.toggle}/>
									</BannerRoot>
								)
								return (
									<BannerRoot className="header" backgroundImage={banner}>
										<Icon src={icon} className="icon"/>
										<BannerName className="name">{data.guild.name}</BannerName>
										<Tooltip
											placement="bottom"
											overlay={
												`${data.guild.memberCount === 1 ? `${data.guild.memberCount} member in this server.` : `${data.guild.memberCount} members in this server.`}`
											}
										>
											<Count className="count">{data.guild.memberCount}</Count>
										</Tooltip>
										<Close onClick={store.sidebar.toggle}/>
									</BannerRoot>
								)

							}

							if (window.innerWidth < 520) return (
								<Root className="header">
									<Icon src={icon} className="icon"/>
									<Name className="name">{data.guild.name}</Name>
									<Close onClick={store.sidebar.toggle}/>
								</Root>
							)
							return (
								<Root className="header">
									<Icon src={icon} className="icon"/>
									<Name className="name">{data.guild.name}</Name>
									<Tooltip
										placement="bottom"
										overlay={
											`${data.guild.memberCount === 1 ? `${data.guild.memberCount} member in this server.` : `${data.guild.memberCount} members in this server.`}`
										}
									>
										<Count className="count">{data.guild.memberCount}</Count>
									</Tooltip>
									<Close onClick={store.sidebar.toggle}/>
								</Root>
							)
						}}
					</Query>
				)}
			</Route>
		)
	}
}

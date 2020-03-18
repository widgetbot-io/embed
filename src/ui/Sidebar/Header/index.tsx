import Tooltip from 'rc-tooltip'
import * as React from 'react'
import {Acronym, BannerName, BannerRoot, Count, Icon, Name, Root} from './elements'
import {generalStore} from "@store";
import {store} from "@models";
import {Close} from "@ui/Sidebar/elements";
import webpCheck from '@ui/shared/webpCheck'
import {observer} from "mobx-react";
import {Locale} from '@lib/Locale'


@observer
export class Header extends React.Component<{}, {}> {
	render() {
		let icon = generalStore.guild.iconURL;

		if (icon.includes('a_')) {
			icon = icon.replace('jpg', 'gif?size=64')
		} else {
			icon = webpCheck(icon.replace('jpg', 'webp?size=64'))
		}

		if (generalStore.guild.bannerURL) {
			let banner = webpCheck(generalStore.guild.bannerURL);

			if (window.innerWidth < 520) return (
				<BannerRoot className="header" backgroundImage={banner}>
					{icon.includes('null') ?
						<Acronym>{generalStore.guild.name.replace(/\w+/g, name => name[0]).replace(/\s/g, '')}</Acronym> :
						<Icon src={icon} className="icon"/>
					}
					<BannerName className="name">{generalStore.guild.name}</BannerName>
					<Close onClick={store.sidebar.toggle}/>
				</BannerRoot>
			)
			return (
				<BannerRoot className="header" backgroundImage={banner}>
					{icon.includes('null') ?
						<Acronym>{generalStore.guild.name.replace(/\w+/g, name => name[0]).replace(/\s/g, '')}</Acronym> :
						<Icon src={icon} className="icon"/>
					}
					<BannerName className="name">{generalStore.guild.name}</BannerName>
					<Tooltip
						placement="bottom"
						overlay={
							`${generalStore.guild.memberCount === 1 ? Locale.translate('frontend.membercount.one.tooltip') : Locale.translate('frontend.membercount.tooltip', {COUNT: String(generalStore.guild.memberCount)})}`
						}
					>
						<Count className="count">{generalStore.guild.memberCount}</Count>
					</Tooltip>
					<Close onClick={store.sidebar.toggle}/>
				</BannerRoot>
			)
		}
		if (window.innerWidth < 520) return (
			<Root className="header">
				{icon.includes('null') ?
					<Acronym>{generalStore.guild.name.replace(/\w+/g, name => name[0]).replace(/\s/g, '')}</Acronym> :
					<Icon src={icon} className="icon"/>
				}
				<Name className="name">{generalStore.guild.name}</Name>
				<Close onClick={store.sidebar.toggle}/>
			</Root>
		)

		return (
			<Root className="header">
				{icon.includes('null') ?
					<Acronym>{generalStore.guild.name.replace(/\w+/g, name => name[0]).replace(/\s/g, '')}</Acronym> :
					<Icon src={icon} className="icon"/>
				}
				<Name className="name">{generalStore.guild.name}</Name>
				<Tooltip
					placement="bottom"
					overlay={
						`${generalStore.guild.memberCount === 1 ? `${generalStore.guild.memberCount} member in this server.` : `${generalStore.guild.memberCount} members in this server.`}`
					}
				>
					<Count className="count">{generalStore.guild.memberCount}</Count>
				</Tooltip>
				<Close onClick={store.sidebar.toggle}/>
			</Root>
		)
	}
}

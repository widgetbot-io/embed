import React from "react";
import {Route} from "react-router-dom";
import {Query} from "@apollo/client/react/components";
import {Channels, ChannelsVariables} from "@generated";
import {inject, observer} from "mobx-react";

import {Selector} from "@ui/SelectItem";

import {Root} from "./elements";
import Category from "./Category";
import categorise from "./categorise";
import CHANNELS from "./Channels.graphql";
import {AuthStore} from "@store/auth";
import {useRouter} from "@hooks";
import {useSubscription} from "@apollo/client";
import {generalStore} from "@store";
import {Loading} from "@ui/Overlays";

export const ITEM_ID = 'channel';

export const ChannelSwitcher = observer(() => (
	<Route path="/:guild/:channel?">
		{({
			  match: {
				  params: {guild, channel}
			  }
		  }) => {
			return (
				<Root className="channels">
					<Selector itemID={ITEM_ID}/>
					{generalStore.channels.map((category, i) => (
							<Category key={i} category={category} activeChannel={channel} index={i}/>
						)
					)}
				</Root>
			)
		}}
	</Route>
));


export default ChannelSwitcher

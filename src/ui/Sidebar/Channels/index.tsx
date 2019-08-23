import React from "react";
import { Route } from "react-router-dom";
import { Query } from "react-apollo";
import { Channels, ChannelsVariables } from "@generated";
import { inject, observer } from "mobx-react";

import { Selector } from "@ui/SelectItem";

import { Root } from "./elements";
import Category from "./Category";
import categorise from "./categorise";
import CHANNELS from "./Channels.graphql";
import { AuthStore } from "../../../stores/auth";

export const ITEM_ID = 'channel';

interface Props {
  AuthStore?: AuthStore
}

@inject('AuthStore')
@observer
class ChannelSwitcher extends React.Component<Props> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <Route path="/:guild/:channel?">
        {({
            match: {
              params: { guild, channel }
            }
          }) => (
          <Query<Channels, ChannelsVariables>
            query={CHANNELS}
            variables={{ guild }}
          >
            {({ loading, error, data }) => {
              if (!loading && !error) this.props.AuthStore.channels = categorise(data.guild.channels as any);

              return (
                <Root className="channels">
                  <Selector itemID={ITEM_ID} />
                  {this.props.AuthStore.channels.map((category, i) => (
                    <Category key={i} category={category} activeChannel={channel} />
                  ))}
                </Root>
              )
            }}
          </Query>
        )}
      </Route>
    )
  }
}

export default ChannelSwitcher

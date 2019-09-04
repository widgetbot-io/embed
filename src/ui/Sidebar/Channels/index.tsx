import React from "react";
import {Route} from "react-router-dom";
import {Query} from "react-apollo";
import {Channels, ChannelsVariables} from "@generated";
import {inject, observer} from "mobx-react";

import {Selector} from "@ui/SelectItem";

import {Refresh, Root} from "./elements";
import Category from "./Category";
import categorise from "./categorise";
import CHANNELS from "./Channels.graphql";
import {AuthStore} from "@store/auth";
import {NEW_MESSAGES, useRouter} from "@hooks";
import {useSubscription} from "react-apollo-hooks";

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
            {({ loading, error, data, refetch }) => {
              if (!loading && !error) this.props.AuthStore.channels = categorise((data.guild.channels as any).sort((a, b) => { return a.position - b.position }));
              return (
                <Root className="channels">
                  <Selector itemID={ITEM_ID} />
                  <Refresh
                    className='Refresh'
                    variant='large'
                    onClick={ () => {
                      refetch();
                    } }
                  >
                    Refresh Channels
                  </Refresh>
                  {this.props.AuthStore.channels.map((category, i) => (
                    <Category key={i} category={category} activeChannel={channel} index={i} />
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

export const channelPings = (AuthStore: AuthStore) => {
  const { guild } = useRouter();

  async function get() {
    console.log('called');
    useSubscription(NEW_MESSAGES, {
      // variables: { channel: '614463092901806101' },
      onSubscriptionData({ subscriptionData }) {
        console.log('vee')
        console.log(subscriptionData);
      }
    });
  }

  return { get }
};

export default ChannelSwitcher

import { WebSocketLink } from 'apollo-link-ws'
import { url } from "@lib/env";

const wsLink = new WebSocketLink({
  uri: `${location.protocol === 'https:' ? 'wss' : 'ws'}://${url}/api/graphql`,
  options: {
    reconnect: true
  }
});

export default wsLink

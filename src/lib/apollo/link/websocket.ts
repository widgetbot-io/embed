import { WebSocketLink } from '@apollo/client/link/ws'
import { url } from "@lib/env";

const wsLink = new WebSocketLink({
  uri: `${url.includes('127.0.0.1') ? 'ws' : 'wss'}://${url}/api/graphql`,
  options: {
    reconnect: true
  }
});

export default wsLink

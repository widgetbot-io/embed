import { WebSocketLink } from 'apollo-link-ws'
import { url } from "@lib/env";

const wsLink = new WebSocketLink({
  uri: 'wss://stonks.widgetbot.io/ws/graphql',
  // uri: `${url.includes('127.0.0.1') ? 'ws' : 'wss'}://${url}/ws/graphql`,
  options: {
    reconnect: true
  }
});

export default wsLink

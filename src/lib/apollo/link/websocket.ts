/*eslint-disable */
import { WebSocketLink } from 'apollo-link-ws'

const wsLink = new WebSocketLink({
  uri: `${location.protocol === 'https:' ? 'wss' : 'ws'}://127.0.0.1:8443/api/graphql`,
  options: {
    reconnect: true
  }
});

export default wsLink

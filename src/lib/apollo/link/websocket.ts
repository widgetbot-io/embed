import { WebSocketLink } from 'apollo-link-ws'

const wsLink = new WebSocketLink({
  uri: `${location.protocol === 'https:' ? 'wss' : 'ws'}://prep.daave.dev/api/graphql`,
  options: {
    reconnect: true
  }
});

export default wsLink

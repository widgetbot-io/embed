import { WebSocketLink } from 'apollo-link-ws'

const SECURE = location.protocol === 'https:'

const wsLink = new WebSocketLink({
  uri: `${SECURE ? 'wss' : 'ws'}:${location.host}/api/graphql`,
  options: {
    reconnect: true
  }
})

export default wsLink

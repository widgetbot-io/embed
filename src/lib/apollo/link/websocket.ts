import { WebSocketLink } from 'apollo-link-ws'
import {WS_URL} from "@lib/env";

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: window.localStorage.getItem('token') || ''
    }
  }
});

export default wsLink

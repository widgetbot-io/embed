import 'babel-polyfill'

import client from '@lib/apollo'
import { connect } from '@lib/sentry'
import * as React from 'react'
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import * as ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import App from './app'
import { history } from '@lib/history'
import AuthStore from "./stores/auth";

const stores = { AuthStore };

// Render App
ReactDOM.render(
  <Provider {...stores}>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router history={history}>
          <App />
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

connect()

// Hot reloading
declare const module: any
if (module.hot) {
  module.hot.accept()
}

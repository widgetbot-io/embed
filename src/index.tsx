import 'babel-polyfill'

import client from '@lib/apollo'
import * as React from 'react'
import { Provider } from 'mobx-react';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import * as ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import App from './app'
import { history } from '@lib/history'
import AuthStore from "./stores/auth";

import register, { unregister } from './registerServiceWorker'

const stores = { AuthStore };

if (!window.location.hostname.includes(`127.0.0.1`) && !window.location.hostname.includes(`localhost`))
    Sentry.init({dsn: 'https://e83fba164e0c4e4ea0ff29c829a743fd@sentry.venix.dev/2'});

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

// Hot reloading
declare const module: any;
if (module.hot) {
    unregister();
    module.hot.accept()
} else {
    register();
}

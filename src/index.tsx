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

import register, { unregister } from './registerServiceWorker'
import { cache, CacheProvider } from '@lib/emotion';

if (!window.location.hostname.includes(`127.0.0.1`) && !window.location.hostname.includes(`localhost`))
    Sentry.init({dsn: 'https://dc53893051504a7f9f94b1c207364f5f@o328116.ingest.sentry.io/1840509'});

// Render App
ReactDOM.render(
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router history={history}>
          <CacheProvider value={cache}>
            <App />
          </CacheProvider>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>,
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

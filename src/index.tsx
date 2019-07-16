import 'babel-polyfill'

import client from '@lib/apollo'
import { connect } from '@lib/sentry'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import * as ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import App from './app'
import { history } from '@lib/history'

// Render App
ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

connect()

// Hot reloading
declare const module: any
if (module.hot) {
  module.hot.accept()
}

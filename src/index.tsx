import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from  '@sentry/browser';
import './index.css';
import App from './app/';
import {Provider} from "mobx-react";
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from "react-apollo";
import {ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";
import {Router} from "react-router";

import { client, history } from './lib';
import {AuthStore} from "./stores/auth";

const stores = { AuthStore };

Sentry.init({dsn: "https://07f954e10c0040509f9349d5ade54934@sentry.disweb.io/2"});

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
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

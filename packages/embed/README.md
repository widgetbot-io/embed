# Discord embed

[![Greenkeeper badge](https://badges.greenkeeper.io/widgetbot-io/embed.svg)](https://greenkeeper.io/) [![Maintainability](https://api.codeclimate.com/v1/badges/b59560cf2c74db9f3e96/maintainability)](https://codeclimate.com/github/widgetbot-io/embed/maintainability)

![Screenshot](https://i.imgur.com/eGKcLlN.png)

## Introduction

This repo was bootstrapped from [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).

## Tools

- [CerebralJS](https://cerebraljs.com) - state management within the app.
- [GraphQL](https://graphql.org/learn/) - for static data requests
- [Socket.IO](https://socket.io/) - for realtime requests
- [prettier](http://prettier.io) - for code formatting

## Setting up

To start a development webpack server, simple run the following:

```bash
# Install dependencies
yarn
# Start app
yarn start
```

Once you've done that, open up [`localhost:3000/channels/299881420891881473/355719584830980096`](http://localhost:3000/channels/299881420891881473/355719584830980096) in your browser. All server requests will be proxied to `localhost:7000`, so make sure the server is running on that port.

## Testing

Cross-browser testing proudly sponsered by [BrowserStack](https://browserstack.com)

[![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)](https://browserstack.com)

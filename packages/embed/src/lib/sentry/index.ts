import { RavenStatic } from 'raven-js'

declare const Raven: RavenStatic

const { version } = require('../../../package.json')
const token = 'https://cae24d4800ac4eb6b5dcc8c9fc8c41ec@sentry.io/1205518'

export function R(callback: (RavenStatic) => any) {
  if (Raven) callback(Raven)
}

export function connect() {
  R(Raven => {
    if (process.env.NODE_ENV !== 'development') {
      Raven.config(token, {
        environment: process.env.NODE_ENV,
        release: `${version}`,
        tags: { version }
      }).install()
    }
  })
}

export default Raven

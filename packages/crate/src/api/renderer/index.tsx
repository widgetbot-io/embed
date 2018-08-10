import { API } from '@widgetbot/react-embed'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from '../../app'
import { Node } from './root'

interface Props {
  onAPI: (api: API) => void
  node: Node
  store: any
}

const render = ({ node, store, ...props }: Props) => {
  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
    node
  )

  return node
}

export default render

export { default as root } from './root'
export * from './root'

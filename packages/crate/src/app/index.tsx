import { API } from '@widgetbot/react-embed'
import { cx } from 'emotion'
import * as React from 'react'
import { connect } from 'react-redux'
import ShadowDOM from 'react-shadow'

import { stylis } from '../api/embedAPI'
import { createEmotion, Provider } from '../controllers/emotion'
import { State } from '../types/store'
import App from './app'

export const APIContext = React.createContext(null)

interface OwnProps {
  onAPI: (api: API) => void
}

interface StateProps {
  css: string
  interactive: boolean
  open: boolean
}

class Controller extends React.Component<StateProps & OwnProps> {
  state = {
    emotion: null,
    id: `crate-${Math.random()
      .toString(36)
      .substr(2, 9)}`
  }

  registerEmotion = (styleInjection: HTMLDivElement) => {
    this.setState({
      emotion: createEmotion(styleInjection)
    })
  }

  shadowDOM(props) {
    const children = <shadow-root>{props.children}</shadow-root>
    const supported = !!(
      (document.head as any).createShadowRoot || document.head.attachShadow
    )

    return supported ? <ShadowDOM>{children}</ShadowDOM> : children
  }

  render() {
    const { id } = this.state
    const { css, onAPI, interactive, open } = this.props

    const styles = stylis(`.${id}`, css)

    return (
      <this.shadowDOM>
        <div
          className={cx(id, {
            interactive,
            open
          })}
        >
          <shadow-styles ref={this.registerEmotion}>
            <style>{styles}</style>
          </shadow-styles>
          {this.state.emotion && (
            <Provider value={this.state.emotion}>
              <APIContext.Provider value={onAPI}>
                <App />
              </APIContext.Provider>
            </Provider>
          )}
        </div>
      </this.shadowDOM>
    )
  }
}

export default connect<StateProps, {}, {}, State>(
  ({ interactive, open, options }) => ({
    css: options.css,
    interactive,
    open
  })
)(Controller)

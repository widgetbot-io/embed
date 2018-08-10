import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { connect } from 'react-redux'

import Options from '../types/options'
import { State } from '../types/store'
import Theme from '../types/theme'
import { getCoords } from '../util/parse'
import Button from './Button'
import { Root } from './elements'
import Embed from './Embed'
import Notifications from './Notifications'

interface StateProps {
  options: Options
  open: boolean
  visible: boolean
}

class App extends React.Component<StateProps> {
  getTheme = (): Theme => ({
    options: this.props.options,
    coords: getCoords(this.props.options.location),
    open: this.props.open,
    visible: this.props.visible
  })

  render() {
    const { options, open } = this.props

    return (
      <ThemeProvider theme={this.getTheme()}>
        <Root className="root">
          <Embed />
          {options.notifications && !open && <Notifications />}
          <Button />
        </Root>
      </ThemeProvider>
    )
  }
}

export default connect<StateProps, {}, {}, State>(
  ({ visible, options, open }) => ({
    options,
    visible,
    open
  })
)(App)

import * as React from 'react'

import { Box, Content, Close } from '@ui/Modal'

class Settings extends React.PureComponent {
  render() {
    return (
      <Box>
        <Close onClick={() => close()} />
        <Content>Settings</Content>
      </Box>
    )
  }
}

export default Settings

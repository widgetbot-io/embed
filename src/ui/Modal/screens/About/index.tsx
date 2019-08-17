import * as React from 'react'

import { Box, Close } from '@ui/Modal'

class About extends React.PureComponent {
  render() {
    return (
      <Box>
        <Close onClick={() => close()} />
        ABOUT
      </Box>
    )
  }
}

export default About

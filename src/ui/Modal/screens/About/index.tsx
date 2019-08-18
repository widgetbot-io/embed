/* eslint-disable */

import * as React from 'react'

import { Box, Close } from '../../../Modal'

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

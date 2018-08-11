import { OpenModal, OpenModalVariables } from '@queries/__generated__/OpenModal'
import OPEN_MODAL from '@queries/OpenModal.graphql'
import Tooltip from 'rc-tooltip'
import * as React from 'react'
import { Mutation } from 'react-apollo'

import { Root, Version } from './elements'

const { version } = require('../../../../package.json')

class Panel extends React.PureComponent {
  render() {
    return (
      <Mutation<OpenModal, OpenModalVariables> mutation={OPEN_MODAL}>
        {openModal => (
          <Root className="panel">
            <Tooltip placement="top" overlay="About WidgetBot">
              <Version
                href={`https://widgetbot.io`}
                target="_blank"
                onClick={e => {
                  e.preventDefault()
                  openModal({ variables: { type: 'about', data: null } })
                }}
              >
                {`v${version}`}
              </Version>
            </Tooltip>
          </Root>
        )}
      </Mutation>
    )
  }
}

export default Panel

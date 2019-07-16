import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Root, Settings, Version } from './elements'
import { Trans } from '@lingui/react'
import { store } from '@models'

const { version } = require('../../../../package.json')

const Panel = () => {
  return (
    <Root className="panel">
      <Tooltip
        placement="top"
        overlay={<Trans id="Panel.settings">Settings</Trans>}
      >
        <Settings onClick={store.modal.openSettings} />
      </Tooltip>
      {/* <Tooltip
              placement="top"
              overlay={<Trans id="Panel.about">About</Trans>}
            >
              <Version
                href={`https://widgetbot.io`}
                target="_blank"
                onClick={e => {
                  e.preventDefault()
                  openModal({ variables: { type: 'settings', data: null } })
                }}
              >
                {`v${version}`}
              </Version>
            </Tooltip> */}
    </Root>
  )
}

export default Panel

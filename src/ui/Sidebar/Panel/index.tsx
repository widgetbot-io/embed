import Tooltip from 'rc-tooltip'
import * as React from 'react'

import { Root, Settings, Version } from './elements'
import { Trans } from '@lingui/react'
import { store } from '@models'
import Button from "@ui/shared/button";
import { inject, observer } from "mobx-react";
import { AuthStore } from "../../../stores/auth";

const { version } = require('../../../../package.json')

interface Props {
  AuthStore?: AuthStore
}

@inject('AuthStore')
@observer
export default class Panel extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Root className="panel">
        {
          /* <Tooltip
             placement="top"
             overlay={<Trans id="Panel.settings">Settings</Trans>}
           >
             <Settings onClick={store.modal.openSettings} />
           </Tooltip>  */
              <Tooltip
                   placement="top"
                   overlay={<Trans id="Panel.about">About</Trans>}
                 >
                   <Version
                     href={`https://disweb.deploys.io`}
                     target="_blank"
                     onClick={e => {
                       e.preventDefault()
                       // openModal({ variables: { type: 'settings', data: null } })
                     }}
                   >
                     {`v${version}`}
                   </Version>
                 </Tooltip>
        }
      </Root>
    )
  }
}

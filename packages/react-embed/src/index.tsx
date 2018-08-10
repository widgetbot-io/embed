import { Client } from '@widgetbot/embed-api'
import * as React from 'react'

import { Embed, Root } from './elements'
import { generateUUID, searchParams } from './util'

export interface IProps {
  server?: string
  channel?: string
  shard?: string

  defer?: boolean

  className?: string
  onAPI?: (api: Client) => void

  style?: React.CSSProperties
  height?: number
  width?: number

  options?: { [key: string]: string }
}

class WidgetBot extends React.PureComponent<IProps> {
  static defaultProps: IProps = {
    server: '299881420891881473',
    shard: 'https://widgetbot.io',
    options: {},
    defer: false
  }

  state = {
    url: null,
    id: generateUUID()
  }

  api = new Client({
    id: this.state.id,
    iframe: null
  })

  static getDerivedStateFromProps(props: IProps, state) {
    const url = `${props.shard}/channels/${props.server}${
      props.channel ? `/${props.channel}` : ''
    }/${searchParams({
      ...props.options,
      api: state.id
    })}`

    return { url }
  }

  componentDidMount() {
    const { onAPI } = this.props

    if (onAPI) onAPI(this.api)
  }

  render() {
    const { defer, className, style, height, width } = this.props

    return (
      <div
        className={className}
        style={{ ...Root({ width, height }), ...style }}
      >
        <iframe
          src={defer ? '' : this.state.url}
          ref={ref => (this.api.iframe = ref)}
          style={Embed}
        />
      </div>
    )
  }
}

export default WidgetBot

export * from '@widgetbot/embed-api'

export { Client as API } from '@widgetbot/embed-api'

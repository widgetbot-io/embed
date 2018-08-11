import { member } from '@queries/fragments/__generated__/member'
import Moment from 'moment'
import * as React from 'react'

import parseUsername from '../parseUsername'
import { Verified } from './Badges'
import { Name, Root, Time } from './elements'

interface Props {
  author: member
  time: number
}

export const Timestamp = ({ time }: { time: number }) => (
  <Time className="time">{Moment(time).calendar()}</Time>
)

class Author extends React.PureComponent<Props> {
  tags() {
    const { author } = this.props

    return (
      <React.Fragment>
        {/* {author.type === 'bot' && <Tag className="bot">Bot</Tag>}
              {author.type === 'guest' && <Tag className="guest">Guest</Tag>}
              {this.verified({ id: author.id }) ||
                (author.type === 'sysadmin' && (
                  <Sysadmin className="sysadmin" title="Sysadmin" />
                ))} */}
      </React.Fragment>
    )
  }

  render() {
    const { author, time } = this.props
    const { name } = parseUsername(author.name)

    return (
      <Root className="author">
        <Name color={author.color} className="name">
          {name}
        </Name>
        {this.tags()}
        <Timestamp time={time} />
      </Root>
    )
  }

  verified({ id }: { id: string }) {
    const modal = (data: string) => e => {
      e.preventDefault()
      // TODO: FIX
      // toggle({ open: true, type: 'developer', data })
    }

    if (id === '294916911194570754') {
      // samdd
      return (
        <Verified
          href="https://samdd.me/"
          title="Developer"
          onClick={modal('samdd')}
        />
      )
    }

    if (id === '111783814740594688') {
      // Voakie
      return (
        <Verified
          href="https://voakie.com/"
          title="Developer"
          onClick={modal('voakie')}
        />
      )
    }

    return null
  }
}

export default Author

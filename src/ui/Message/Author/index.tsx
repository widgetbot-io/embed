import { Message_TextMessage_user } from '@generated'
import Moment from 'moment'
import * as React from 'react'

import { Sysadmin, Tag, Verified } from "./Badges";
import { Name, Root, Time } from './elements'
import { Locale } from '@lib/Locale';

interface Props {
  user: Message_TextMessage_user,
  time: number,
  crosspost: boolean
}

const developers = {
  "96626362277720064": {
    href: null,
    title: "Owner",
  },
  "242097488507568128": {
    href: null,
    title: "Developer"
  },
  "326483019349098506": {
    href: null,
    title: "Developer"
  },
  "190916650143318016": {
    href: null,
    title: "Staff"
  },
  "302604426781261824": {
    href: null,
    title: "Developer"
  }
};

export const Timestamp = ({ time }: { time: number }) => (
  <Time className="time">{Moment(time).calendar()}</Time>
);

class Author extends React.PureComponent<Props> {
  tags() {
    const { user, crosspost } = this.props;

    return (
      <React.Fragment>
        {user.bot && (crosspost ? <Tag className="bot">{Locale.translate('frontend.tag.server')}</Tag> : <Tag className="bot">{Locale.translate('frontend.tag.bot')}</Tag>)}
              {user.id === 'aaaa' && <Tag className="guest">Guest</Tag>}
              {Author.verified({ id: user.id })/* ||
                (author.id === '190916650143318016' && (
                  <Sysadmin className="patreon" title="Patreon" />
                ))*/}
      </React.Fragment>
    )
  }

  render() {
    const { user, time } = this.props;

    const hexColor =
      (user ? user.color : null) ||
      '#fff';

    return (
      <Root className="author">
        <Name color={hexColor} className="name">
          {user.name}
        </Name>
        {this.tags()}
        <Timestamp time={time} />
      </Root>
    )
  }

  static verified({ id }: { id: string }) {
    if (developers[id]) {
      const dev = developers[id];
      return <Verified
        href={dev.href}
        title={dev.title}
        target="_blank"
        rel="noopener"
      />
    }

    return null
  }
}

export default Author

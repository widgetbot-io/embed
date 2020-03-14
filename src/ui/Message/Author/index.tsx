import { Author as $Author, Member as $Member } from '@generated'
import Moment from 'moment'
import * as React from 'react'

import { Sysadmin, Tag, Verified } from "./Badges";
import { Name, Root, Time } from './elements'
import { Locale } from '@lib/Locale';
import { store } from '@models';

interface Props {
  author: $Author,
  member: $Member,
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
  },
  "207629082257653760": {
    href: "https://file.properties",
    title: "Staff"
  }
};

export const Timestamp = ({ time }: { time: number }) => (
  <Time className="time">{Moment(time).calendar()}</Time>
);

class Author extends React.PureComponent<Props> {
  tags() {
    const { author, crosspost } = this.props;

    return (
      <React.Fragment>
        {author.bot && (crosspost ? <Tag className="bot">{Locale.translate('frontend.tag.server')}</Tag> : <Tag className="bot">{Locale.translate('frontend.tag.bot')}</Tag>)}
              {author.id === 'aaaa' && <Tag className="guest">Guest</Tag>}
              {Author.verified({ id: author.id })/* ||
                (author.id === '190916650143318016' && (
                  <Sysadmin className="patreon" title="Patreon" />
                ))*/}
      </React.Fragment>
    )
  }

  render() {
    const { author, time, member } = this.props;

    const hexColor =
      (member ? member.displayHexColor : null) ||
      '#fff';

    return (
      <Root className="author">
        <Name color={hexColor} className="name" onClick={() => store.modal.openProfile(member, author)}>
          {member.displayName || author.username}
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

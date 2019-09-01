import { Author as $Author, Member as $Member } from '@generated'
import Moment from 'moment'
import * as React from 'react'

import { Sysadmin, Tag, Verified } from "./Badges";
import { Name, Root, Time } from './elements'

interface Props {
  author: $Author,
  member: $Member,
  time: number
}

const developers = {
  "96626362277720064": {
    href: "https://daave.dev",
    title: "Owner",
  },
  "242097488507568128": {
    href: "https://viction.dev",
    title: "Developer"
  },
  "326483019349098506": {
    href: null,
    title: "Developer"
  }
};

export const Timestamp = ({ time }: { time: number }) => (
  <Time className="time">{Moment(time).calendar()}</Time>
);

class Author extends React.PureComponent<Props> {
  tags() {
    const { author } = this.props;

    return (
      <React.Fragment>
        {author.id === '558793418495623188' && <Tag className="bot">Bot</Tag>}
              {author.id === 'aaaa' && <Tag className="guest">Guest</Tag>}
              {Author.verified({ id: author.id }) ||
                (author.id === '190916650143318016' && (
                  <Sysadmin className="patreon" title="Patreon" />
                ))}
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
        <Name color={hexColor} className="name">
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
      />
    }

    return null
  }
}

export default Author

import {NewMessages_message_author} from '@generated'
import Moment from 'moment'
import * as React from 'react'

import { Sysadmin, Tag, Verified } from "./Badges";
import { Name, Root, Time, VerifiedBot } from './elements'
import { Locale } from '@lib/Locale';
import Tooltip from 'rc-tooltip';

interface Props {
  author: NewMessages_message_author,
  time: number,
  crosspost: boolean,
  referenceGuild: string
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
  <Time className="time">{Moment(time*1000).calendar()}</Time>
);

const verified = 
  <Tooltip placement="top" overlay="Verified Bot">
    <VerifiedBot aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2"><path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path></VerifiedBot>
  </Tooltip>

export const tags = ({author, crosspost, referenceGuild}: Omit<Props, 'time'>) => 
  <React.Fragment>
    {author.bot &&
      ( author.flags & 1 << 12 ? <Tag className="verified system">{verified} System</Tag>
      : referenceGuild === '667560445975986187' ? <Tag className="system">System</Tag>
      : crosspost ? <Tag className="server">{Locale.translate('frontend.tag.server')}</Tag>
      : author.flags & 1 << 16 ? <Tag className="verified bot">{verified} {Locale.translate('frontend.tag.bot')}</Tag>
      : <Tag className="bot">{Locale.translate('frontend.tag.bot')}</Tag>
      )}
    {author.id === 'aaaa' && <Tag className="guest">Guest</Tag>}
  </React.Fragment>

class Author extends React.PureComponent<Props> {
  render() {
    const { author, time } = this.props;

    // const hexColor =
    //   (author ? author.color : null) ||
    //   '#fff';

    const hexColor = '#fff';

    return (
      <Root className="author">
        <Name color={hexColor} className="name">
          {author.name}
        </Name>
        {tags(this.props)}
        {Author.verified({ id: author.id })}
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

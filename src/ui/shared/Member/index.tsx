import { cx } from 'emotion'
import { Route } from 'react-router-dom'
import { Query } from 'react-apollo'

import {MemberInfo, Message_author, Message_mentions} from '@generated'
import MemberLink from './link'
import MEMBER_INFO from './MemberInfo.graphql'

interface Props {
  id: string
  className?: string
  children: (member: Partial<Message_author>) => any
  data?: Message_mentions
}

const Member = ({ id, children, className, data }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => (
        <MemberLink id={id} className={cx('member-link', className)}>
          {children({
            __typename: 'User',
            name: data?.name || id,
            color: 0x0000ff,
            id
          })}
        </MemberLink>
    )}
  </Route>
)

export default Member

export { default as MemberLink } from './link'

/*
<Query<MemberInfo, { server: string, member: string }>
        key={`member_info:${member}`}
        query={MEMBER_INFO}
        variables={{ server, member }}
      >
        {({ error, loading, data }) => {
          const success = !error && !loading && data && data.guild;
          const displayName = success ? `@${data.guild.member.displayName}` : `<@${member}>`;
          const displayHexColor = success ? `` : ``;

          return (
            <MemberLink id={member} className={cx('member-link', className)}>
              {children({
                __typename: 'Member',
                displayName,
                displayHexColor,
                id: member
              })}
            </MemberLink>
          )
        }}
      </Query>
 */

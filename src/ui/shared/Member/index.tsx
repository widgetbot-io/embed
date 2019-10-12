import { cx } from 'emotion'
import { Route } from 'react-router-dom'
import * as React from 'react'
import { Query } from 'react-apollo'

import {MemberInfo, MemberInfo_guild_member} from '@generated'
import MemberLink from './link'
import MEMBER_INFO from './MemberInfo.graphql'

// TODO: FIx
interface Props {
  id: string
  className?: string
  children: (member: MemberInfo_guild_member) => any
}

const Member = ({ id: member, children, className }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => (
      <Query <MemberInfo, { server: string, member: string }>
        key="member_role"
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
    )}
  </Route>
)

export default Member

export { default as MemberLink } from './link'

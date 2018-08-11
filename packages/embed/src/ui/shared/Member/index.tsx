import { cx } from 'emotion'
import { Route } from 'react-router'
import * as React from 'react'
import { Query } from 'react-apollo'

import {
  MemberInfo,
  MemberInfo_server_member,
  MemberInfoVariables
} from './__generated__/MemberInfo'
import MemberLink from './link'
import MEMBER_INFO from './MemberInfo.graphql'

interface Props {
  id: string
  className?: string
  children: (member: MemberInfo_server_member) => any
}

const Member = ({ id: member, children, className }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => (
      <Query<MemberInfo, MemberInfoVariables>
        query={MEMBER_INFO}
        variables={{ server, member }}
      >
        {({ error, loading, data }) => {
          const success = !error && !loading && data && data.server
          const name = success ? `@${data.server.member.name}` : `<@${member}>`

          return (
            <MemberLink id={member} className={cx('member-link', className)}>
              {children({
                __typename: 'Member',
                name,
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

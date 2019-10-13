import {cx} from 'emotion'
import {Route} from 'react-router-dom'
import * as React from 'react'
import {Query} from 'react-apollo'

import RoleLink from './link'
import ROLE_INFO from './RoleInfo.graphql'

interface Props {
  id: string
  className?: string
  children: (member: any) => any
}

const Role = ({ id: role, children, className }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => (
      <Query<any, { server: string, role: string }>
        key={`role_info:${role}`}
        query={ROLE_INFO}
        variables={{ server, role }}
      >
        {({ error, loading, data }) => {
          const success = !error && !loading && data && data.guild;
          const displayName = success ? `@${data.guild.role.name}` : `<@${role}>`;
          const displayHexColor = success ? `aaa` : `bbb`;

          return (
            <RoleLink id={role} className={cx('role-link', className)}>
              {children({
                __typename: 'Member',
                displayName,
                color: displayHexColor,
                id: role
              })}
            </RoleLink>
          )
        }}
      </Query>
    )}
  </Route>
)

export default Role

export { default as MemberLink } from './link'

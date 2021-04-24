import {cx} from 'emotion'
import {Route} from 'react-router-dom'
import {Query} from 'react-apollo'

import RoleLink from './link'
import ROLE_INFO from './RoleInfo.graphql'
import { Message_mentions } from '@generated'
import { generalStore } from '@store'

interface Props {
  id: string
  className?: string
  children: (member: any) => any
  data?: Message_mentions
}

const Role = ({ id, children, className, data }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => (
        <RoleLink id={id} className={cx('role-link', className)}>
          {children({
            __typename: 'Member',
            displayName: data?.name || generalStore.guild?.roles.find(r => r.id === id)?.name || 'deleted-role',
            id: id
          })}
        </RoleLink>
    )}
  </Route>
)

export default Role

export { default as MemberLink } from './link'

/*
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
 */

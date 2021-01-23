import { Route } from 'react-router-dom'
import * as React from 'react'
import { Query } from 'react-apollo'

import {MemberInfo, Message_author} from '@generated'
import MemberLink from './link'
import MEMBER_INFO from './MemberInfo.graphql'

// TODO: FIx
interface Props {
  id: string
  className?: string
  children: (member: Message_author) => any
}

const Member = ({ id: member, children, className }: Props) => (
  <Route path="/:server">
    {({
      match: {
        params: { server }
      }
    }) => ( // TODO: FEATURE/S: When Member Type is Added
        <div></div>
        // <MemberLink id={member} className={cx('member-link', className)}>
        //   {children({
        //     __typename: 'User',
        //     name: member,
        //     color: "0x0000ff",
        //     id: member
        //   })}
        // </MemberLink>
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

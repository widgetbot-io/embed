import * as React from 'react'
import { Route, NavLink, NavLinkProps } from 'react-router-dom'

const ChannelLink = ({
  id,
  ...props
}: Partial<NavLinkProps> & {
  id: string
}) => (
  <Route path="/:server">
    {({ match }) => (
      <NavLink
        to={`/${match.params.server}/${id}`}
        data-channel={id}
        {...props}
      />
    )}
  </Route>
)

export default ChannelLink

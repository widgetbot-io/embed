import * as React from 'react'
import { Route, NavLink, NavLinkProps } from 'react-router-dom'

type Props = Partial<NavLinkProps> & {
  id: string
  $ref?: any
}

class ChannelLink extends React.PureComponent<Props> {
  render() { // Channel onClick has been located.
    const { id, $ref, ...props } = this.props;

    return (
      <Route path="/:server">
        {({ match }) => (
          <NavLink
            to={`/${match.params.server}/${id}`}
            data-channel={id}
            innerRef={$ref}
            {...props}
          />
        )}
      </Route>
    )
  }
}

export default ChannelLink

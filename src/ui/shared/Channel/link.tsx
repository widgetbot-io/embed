import * as React from "react";
import { Route, NavLink, NavLinkProps } from "react-router-dom";
import { store } from "@models";
import { StringChain } from "lodash";

type Props = Partial<NavLinkProps> & {
  id: string;
  $ref?: any;
};

const toggle = () => window.innerWidth < 520 ? store.sidebar.toggle() : null

class ChannelLink extends React.PureComponent<Props> {
  render() {
    const { id, $ref, children, className } = this.props;
    return (
      <Route path="/:server">
        {({ match }) => (
          <NavLink
            to={`/${match.params.server}/${id}`}
            data-channel={id}
            ref={$ref}
            onClick={toggle}
            children={children}
            className={className}
          />
        )}
      </Route>
    );
  }
}

export default ChannelLink;

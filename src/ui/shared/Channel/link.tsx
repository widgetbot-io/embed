import * as React from "react";
import { Route, NavLink, NavLinkProps } from "react-router-dom";
import { store } from "@models";
import { StringChain } from "lodash";

type Props = Partial<NavLinkProps> & {
  id: string;
  $ref?: any;
};

class ChannelLink extends React.PureComponent<Props> {
  render() {
    // @ts-ignore
    const { id, $ref, __typename, ...props } = this.props;
    // @ts-ignore
    const isStore = __typename === "StoreChannel";
    return (
      <Route path="/:server">
        {({ match }) => (
          <NavLink
            to={`/${match.params.server}/${isStore ? "" : id}`}
            data-channel={id}
            innerRef={$ref}
            onClick={store.sidebar.toggle}
            {...props}
          />
        )}
      </Route>
    );
  }
}

export default ChannelLink;

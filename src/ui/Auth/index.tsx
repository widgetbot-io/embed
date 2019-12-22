import * as React from "react";
import { observer } from "mobx-react";
import { Root, Close } from "@ui/Auth/elements";
import Authenticate from "@ui/Modal/screens/Authenticate";
import { store } from "@models";

export const AuthMenu = observer(() => (
  <Root visible={store.authmenu.isOpen}>
    <Authenticate />
  </Root>
));

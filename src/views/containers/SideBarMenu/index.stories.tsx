import { storiesOf } from "@storybook/react";
import React from "react";
import SideBarMenu from ".";
import withReduxProvider from "../../../storybook/provider";

storiesOf("containers/SidebarMenu", module)
  .addDecorator(withReduxProvider)
  .add("default", () => <SideBarMenu />);

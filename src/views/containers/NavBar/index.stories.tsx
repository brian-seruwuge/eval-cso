import { storiesOf } from "@storybook/react";
import React from "react";
import NavBar from ".";
import withReduxProvider from "../../../storybook/provider";

storiesOf("containers/NavBar", module)
  .addDecorator(withReduxProvider)
  .add("default", () => <NavBar />);

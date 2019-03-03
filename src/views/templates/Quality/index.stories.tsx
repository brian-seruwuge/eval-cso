import { storiesOf } from "@storybook/react";
import React from "react";
import Quality from ".";
import withReduxProvider from "../../../storybook/provider";

storiesOf("Templates/Quality", module)
  .addDecorator(withReduxProvider)
  .add("default", () => <Quality />);

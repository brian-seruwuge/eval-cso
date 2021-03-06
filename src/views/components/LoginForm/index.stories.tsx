import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import LoginForm from "./index";

storiesOf("components/Login", module).add("LoginForm", () => (
  <LoginForm autoFocus={false} onSubmit={action("submit")} />
));

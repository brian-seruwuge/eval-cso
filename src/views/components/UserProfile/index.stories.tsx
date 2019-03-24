import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Profile from "./index";

storiesOf("components/Profile", module).add("default", () => (
  <Profile autoFocus={true} onSubmit={action("profile")} />
));
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Search from "./index";

storiesOf("Search", module)
  .add("default", () => (
    <Search
      autoFocus={true}
      onChange={action("search")}
    />
  ));

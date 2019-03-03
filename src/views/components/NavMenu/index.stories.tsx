import { storiesOf } from "@storybook/react";
import React from "react";
import NavMenu, { vertical } from ".";

const items = [
  { name: "Call Quality", id: "call-quality" },
  { name: "SMS Quality", id: "sms-quality" },
  { name: "Email Quality", id: "sms-quality" },
  { name: "Claims Quality", id: "sms-quality" }
];

// tslint:disable no-console
storiesOf("components/NavMenu", module).add("default", () => (
  <NavMenu
    items={items}
    alignment={vertical}
    activeItem="call-quality"
    setActiveMenuItem={console.log}
  />
));

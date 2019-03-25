import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Profile from "./index";

const roleOptions = [
  { text: "Users", key: "users" },
  { text: "Admin", key: "admin" },
  { text: "Evaluators", key: "evaluators" },
  { text: "Supervisors", key: "supervisors" },
  { text: "Agents", key: "agents" }
];

const profile = {
  userName: "aleku399",
  email: "aleku399@gmail.com",
  password: "captain-marvel",
  role: "Supervisors"
}

storiesOf("components/Profile", module).add("default", () => (
  <Profile
    roleOptions={roleOptions}
    autoFocus={true}
    onSubmit={action("profile")}
    profile={profile}
  />
));


import React, { useState } from "react";
import { Button, Form, Header, Input } from "semantic-ui-react";

export interface Credentials {
  email: string;
  password: string;
}

interface Props {
  autoFocus?: boolean;
  onSubmit: (input: Credentials) => Promise<void>;
}

function LoginForm(props: Props): any {
  const [loginData, createLoginForm] = useState({
    email: "",
    password: ""
  });

  const handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    createLoginForm({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmitForm = async () => {
    await props.onSubmit(loginData);
  };

  return (
    <div>
      <Header as="h3" textAlign="center">
        Sign In
      </Header>
      <Form onSubmit={handleSubmitForm}>
        <Form.Field>
          <Input
            icon="user"
            iconPosition="left"
            type="email"
            name="email"
            value={loginData.email}
            placeholder="Email address"
            autoFocus={true}
            onChange={handleInput}
            required={true}
          />
        </Form.Field>
        <Form.Field>
          <Input
            icon="lock"
            iconPosition="left"
            type="password"
            name="password"
            value={loginData.password}
            placeholder="Password"
            onChange={handleInput}
            required={true}
          />
        </Form.Field>
        <Button type="submit" onClick={this.submitForm}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;

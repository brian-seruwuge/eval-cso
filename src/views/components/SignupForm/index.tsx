import * as React from "react";
import { Button, Form, Header, Input, Message } from "semantic-ui-react";

export interface Props {
  autoFocus?: boolean;
  loading?: boolean;
  onSubmit: (data: SingUp) => Promise<void>;
}

interface SingUp {
  username: string;
  email: string;
  password: string;
}

interface State {
  form: SingUp;
  emailError?: string;
}

export default class SignUp extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  public handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;
    const form = { ...this.state.form, [name]: value };
    this.setState({ form });
  };

  public validate = (): boolean => {
    if (!this.state.form.email.toLowerCase().endsWith("@nssfug.org")) {
      const emailError = "Please provide an nssfug.org email";
      this.setState({ emailError });
      return false;
    }
    this.setState({ emailError: null });
    return true;
  };

  public handleSubmit = async () => {
    if (this.validate()) {
      await this.props.onSubmit(this.state.form);
    }
  };

  public render() {
    const hasError = !!this.state.emailError;
    return (
      <div>
        <Header as="h3" textAlign="center">
          Sign Up
        </Header>
        <Form error={hasError} onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>UserName</label>
            <Input
              placeholder="UserName"
              type="text"
              id="username"
              name="username"
              minLength={3}
              value={this.state.form.username}
              onChange={this.handleInput}
              required={true}
            />
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={this.state.form.email}
              onChange={this.handleInput}
              required={true}
            />
            <Message
              error={true}
              header="Email input Error"
              content={this.state.emailError}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.form.password}
              onChange={this.handleInput}
              minLength={5}
              required={true}
            />
          </Form.Field>
          <Button className="ui submit button" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

import React from "react";
import { Button, Form, Header, Input } from "semantic-ui-react";

interface Credentials {
  email: string;
  password: string;
}

interface Props {
  autoFocus?: boolean;
  onSubmit: (input: Credentials) => Promise<void>;
}

class LoginForm extends React.Component<Props, Credentials> {
  public props: Props;
  public state: Credentials;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

  }

  public handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  public handleSubmitForm = async () => {
    await this.props.onSubmit({
      email: this.state.email,
      password: this.state.password
    });
  };

  public render() {
    return(
        <div>
          <Header as="h3" textAlign="center">
            Sign In
          </Header>
          <Form onSubmit={this.handleSubmitForm}>
            <Form.Field>
              <Input
                icon="user"
                iconPosition="left"
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email address"
                autoFocus={true}
                onChange={this.handleInput}
                required={true}
              />
            </Form.Field>
            <Form.Field>
              <Input
                icon="lock"
                iconPosition="left"
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleInput}
                required={true}
              />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </div>
      );
  }
}

export default LoginForm;

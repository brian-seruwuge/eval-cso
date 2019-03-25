import React from "react";
import { Button, Container, Form, Input, Select } from "semantic-ui-react";

export interface Opt {
  key: string;
  text: string;
}

export interface Props {
  roleOptions: Opt[];
  profile: any;
  autoFocus: boolean;
  onSubmit: (data: any) => Promise<void>;
}

export interface State {
  userName: string;
  password: string;
  email: string;
  role: string;
}

class Profile extends React.Component<Props, State> {
  public state: State;

  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.profile.user,
      password: this.props.profile.password,
      email: this.props.profile.email,
      role: this.props.profile.role
    };
  }

  public handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  public handleSubmit = async () => {
    await this.props.onSubmit({
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      roles: this.state.role
    });
  };

  public render() {
    const { role } = this.state;
    const options: Opt[] =
      role === "Admin"
        ? this.props.roleOptions
        : role === "Evaluator"
        ? this.props.roleOptions.filter(opt => opt.text !== "Admin")
        : role === "Supervisor"
        ? this.props.roleOptions.filter(
            opt => opt.text !== "Admin" && opt.text !== "Evaluator"
          )
        : this.props.roleOptions.filter(
            opt =>
              opt.text !== "Admin" &&
              opt.text !== "Evaluator" &&
              opt.text === "Supervisor"
          );
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>User Name</label>
            <Input
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              minLength={3}
              value={this.state.userName}
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
              value={this.state.email}
              onChange={this.handleInput}
              required={true}
            />
          </Form.Field>
          <Form.Field>
            <label>Enter Password</label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
              minLength={5}
              required={true}
            />
          </Form.Field>
          <Form.Field>
            <label>Roles</label>
            <Select
              placeholder="Select your role"
              options={options}
              value={this.state.role}
              onChange={this.handleInput}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Profile;

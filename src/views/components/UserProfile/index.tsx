import React from "react";
import {  Button, Container, Form, Input, Message, Select } from "semantic-ui-react";

const options = [
  { key: 'u', text: 'Users', value: 'users' },
  { key: 'a', text: 'Admin', value: 'admin' },
  { key: 'e', text: 'Evaluators', value: 'evaluators' },
  { key: 's', text: 'Supervisors', value: 'supervisors' },
  { key: 'g', text: 'Agents', value: 'agents' }
]

export interface Props {
  autoFocus: boolean;
  onSubmit: (data: any) => Promise<void>;
}

export interface State {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  emailError?: string; 
  roles: string;
}

class Profile extends React.Component<Props, State> {
  public state: State;

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      roles: ""
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
    if (this.validate()) {
      await this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        emailError: this.state.emailError,
        password: this.state.password,
        roles: this.state.roles
      });
    }
  };

  public validate = (): boolean => {
    if (!this.state.email.toLowerCase().endsWith("@nssfug.org")) {
      const emailError = "Please provide an nssfug.org email";
      this.setState({ emailError });
      return false;
    }
    this.setState({ emailError: null });
    return true;
  };

  public render() {
    const hasError = !!this.state.emailError;
    return (
    <Container>
      <Form error={hasError} onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <Input
            placeholder='First Name'
            type="text"
            id="firstName"
            name="firstName"
            minLength={3}
            value={this.state.firstName}
            onChange={this.handleInput}
            required={true}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Input
            placeholder='Last Name'
            type="text"
            id="lastName"
            name="lastName"
            minLength={3}
            value={this.state.lastName}
            onChange={this.handleInput}
            required={true}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            placeholder='Email'
            type="email"
            name="email"
            value={this.state.email}
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
          <label>Enter Password</label>
          <Input
            type='password'
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
            placeholder='Select your role'
            options={options}
            // value={this.state.roles}
            // onChange={this.onChange}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
    );
  }
}

export default Profile;


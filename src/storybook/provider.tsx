import React from "react";
import { Provider } from "react-redux";
import { Container, Grid, Segment } from "semantic-ui-react";
import { configureStore } from "src/redux";

const ReduxProvider = (props: any) => {
  return (
    <Provider store={configureStore()}>
      {props.children}
    </Provider>
  );
};

export const ReduxFormProvider = (props: any) => {
  return (
    <ReduxProvider>
      <Container>
        <Grid centered={true}>
          <Grid.Column width={10}>
            <Segment>{props.children}</Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </ReduxProvider>
  );
};

export default ReduxProvider;

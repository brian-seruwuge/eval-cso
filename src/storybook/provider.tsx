import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../redux";

const withReduxProvider = (story: any) => (
  <Provider store={configureStore()}>{story()}</Provider>
);

export default withReduxProvider;

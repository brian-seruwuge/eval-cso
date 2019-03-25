import { connect } from "react-redux";
import { AnyAction, createStore, Store } from "redux";
import LoginForm, { Credentials } from "../../components/LoginForm/index";

import {
  ENTER_EMAIL,
  ENTER_PASSWORD,
  enterEmail,
  enterPassword,
} from "./actions";

// async actions

export const reducer = (state: Credentials, action: AnyAction): Credentials => {
  switch(action.type){
    case ENTER_EMAIL:
      return { ...state, email: action.email };
    case ENTER_PASSWORD:
      return { ...state, password: action.password };
    default:
      return state;
  }
};

const mapStateToProps = (state) => ({
  email: reducer(state.email, enterEmail(state.email)),
  password: reducer(state.password, enterPassword(state.password))
});

export const login = connect(mapStateToProps)(LoginForm);

const store: Store = createStore(reducer);

export default store;

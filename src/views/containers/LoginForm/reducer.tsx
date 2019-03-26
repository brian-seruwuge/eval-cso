import { connect } from "react-redux";
import { AnyAction,applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk";
import LoginForm, { Credentials } from "../../components/LoginForm/index";

import {
  ENTER_EMAIL,
  ENTER_PASSWORD,
  enterEmail,
  enterPassword
} from "./actions";

// TODO: async actions

export const reducer = (state: Credentials, action: AnyAction): Credentials => {
  switch (action.type) {
    case ENTER_EMAIL:
      return { ...state, email: action.email };
    case ENTER_PASSWORD:
      return { ...state, password: action.password };
    default:
      return state;
  }
};

const mapStateToProps = state => ({
  email: reducer(state.email, enterEmail(state.email)),
  password: reducer(state.password, enterPassword(state.password))
});

export const login = connect(mapStateToProps)(LoginForm);

// any other middleWares in future ? , just add them in the array i.e
// commonly done in development i.e
// if (process.env === "development") {
// middleWares.push(otherMiddleWare);
// }
const middleWares = [thunkMiddleWare]; 
const middleWareEnhancer = composeWithDevTools(applyMiddleware(...middleWares));

// if (process.env.NODE !== "production" && module.hot) {
//   module.hot.accept("./reducers", () => store.replaceReducer(rootReducer))
// or for other module  //   module.hot.accept("./component/app",renderApp) // return renderApp()

// }
const store: Store = createStore(reducer, undefined, middleWareEnhancer); // preloadState

// return store;

export default store;

import {combineReducers, createStore, Store} from "redux";
import {reducer as formReducer} from "redux-form";

let store = null;

const reducer = combineReducers({
  form: formReducer,
});

export const configureStore = (initialState: any = {}): Store => {
  if (!store) {
    store = createStore(reducer, initialState);
  }

  return store;
};

export const getStore = (): Store => {
  return store;
};

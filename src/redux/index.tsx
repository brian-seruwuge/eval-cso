import {createStore, Store} from "redux";

let store = null;

const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case "ADD_ACTION":
      return state;
    default:
      return state;
  }
};

export const configureStore = (initialState: any = {}): Store => {
  if (!store) {
    store = createStore(reducer, initialState);
  }

  return store;
};

export const getStore = (): Store => {
  return store;
};

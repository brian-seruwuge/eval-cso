import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {
  CHANGE_QUALITY,
  CHANGE_QUALITY_VIEW,
  LOADING_STATUS,
  QualityView
} from "./actions";

export interface AppState {
  quality: string; // TODO: turn into UNION type of all possible qualities
  qualityView: QualityView;
  loading: boolean;
  userId?: string;
  userName?: string;
  userRole?: string;
}

const appState = {
  loading: true,
  quality: "call-quality",
  qualityView: "enter-score"
};

let store = null;

const reducer = (state: AppState, action: AnyAction): AppState => {
  switch (action.type) {
    case CHANGE_QUALITY:
      return { ...state, quality: action.quality };
    case CHANGE_QUALITY_VIEW:
      return { ...state, qualityView: action.qualityView };
    case LOADING_STATUS:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export const configureStore = (initialState: any = appState): Store => {
  if (!store) {
    store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
  }
  return store;
};

export const getStore = (): Store => {
  return store;
};

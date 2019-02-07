import { combineReducers } from "redux";

import * as coreReducer from "./coreReducer";

export interface AppState {
  coreReducer: coreReducer.State;
}

const rootReducer = combineReducers({
  coreReducer: coreReducer.reducer
});

export default rootReducer;

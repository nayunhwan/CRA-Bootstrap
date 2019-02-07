import { all } from "redux-saga/effects";

import coreSaga from "./coreSaga";

export default function* rootSaga() {
  yield all([coreSaga()]);
}

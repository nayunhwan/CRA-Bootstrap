import { takeLatest, all, put, call } from "redux-saga/effects";
import { Action } from "models/Redux";
import { DEFUALT_ACTION } from "actionTypes/coreActionType";
import { coreAction } from "actions/coreAction";

export function* watchFunction(action: Action<any>) {
  yield put(coreAction.success());
}

export default function* coreSaga() {
  yield all([takeLatest(DEFUALT_ACTION.REQUEST, watchFunction)]);
}

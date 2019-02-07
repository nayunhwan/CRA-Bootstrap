import { Action } from "models/Redux";
import { DEFUALT_ACTION } from "actionTypes/coreActionType";

export interface State {}
const initialState: State = {};

export const reducer = (
  state: State = initialState,
  action: Action<any>
): State => {
  switch (action.type) {
    case DEFUALT_ACTION.REQUEST: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

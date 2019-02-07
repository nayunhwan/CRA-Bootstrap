import { DEFUALT_ACTION } from "actionTypes/coreActionType";

export const coreAction = {
  request: () => ({ type: DEFUALT_ACTION.REQUEST }),
  success: () => ({ type: DEFUALT_ACTION.SUCCESS }),
  failure: () => ({ type: DEFUALT_ACTION.FAILURE }),
};

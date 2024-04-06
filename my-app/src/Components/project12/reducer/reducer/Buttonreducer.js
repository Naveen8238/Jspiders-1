import { btn } from "../Action/actionType";
export const buttonreducer = (state = false, action) => {
  if (action.type === btn) {
    return !state;
  } else {
    return state;
  }
};

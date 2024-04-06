import { buttonreducer } from "./Buttonreducer";
import { loginAddreducer, loginreducer } from "./Loginreducer";
import { combineReducers } from "redux";

export const totalreducer = combineReducers({
  buttonreducer,
  loginreducer,
  loginAddreducer,
});

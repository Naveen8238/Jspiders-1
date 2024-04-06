import { combineReducers } from "redux";
import { Countreducer } from "./CounterReducer";
import { textReducer } from "./TextReducer";

export const totalReducer = combineReducers({ Countreducer, textReducer });

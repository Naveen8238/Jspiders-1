import { createStore } from "redux";
import { totalreducer } from "../reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const store = createStore(totalreducer, applyMiddleware(thunk));

import { createStore } from "redux";
import { totalReducer } from "../Reducer";

export const store = createStore(totalReducer);

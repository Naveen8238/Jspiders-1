import React from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./Store";
// const intialValue = {
//   inc: 1,
//   dec: 10,
// };
// const text = {
//   value: "",
// };
// const textReducer = (state = text, action) => {
//   if (action.type === "TEXT") {
//     return {
//       ...state,
//       value: action.payload.target.value,
//     };
//   }
//   return state;
// };
// const Countreducer = (state = intialValue, action) => {
//   if (action.type === "INC") {
//     return {
//       ...state,
//       inc: state.inc + 1,
//     };
//   } else if (action.type === "DEC") {
//     return {
//       ...state,
//       dec: state.dec - 1,
//     };
//   }
//   return state;
// };
const Index = () => {
  return (
    <>
      <h1>This is redux</h1>
      <hr />
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};
export default Index;

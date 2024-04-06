import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type == "DELETE_PERSON") {
    let newFilter = state.data.filter((eachItem) => {
      return eachItem.id !== action.payload;
    });
    return {
      ...state,
      data: newFilter,
      length: state.length - 1,
    };
  }
  return state;
};
const Index = () => {
  const intialState = {
    data: [
      {
        id: "vhvsdbh",
        firstName: "Naveen",
        email: "naveen@gmail.com",
      },
      {
        id: "jdsbf",
        firstName: "Kumar",
        email: "Kumar@gmail.com",
      },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_PERSON", payload: id });
  };
  return (
    <>
      <h1>Hello world</h1>
      <h1>{state.length}</h1>
      {state.data.map((eachItem) => {
        const { id, firstName, email } = eachItem;
        return (
          <div key={id}>
            <h1>{firstName}</h1>
            <h1>{email}</h1>
            <button onClick={() => handleDelete(id)}>DELETE</button>
          </div>
        );
      })}
    </>
  );
};
export default Index;

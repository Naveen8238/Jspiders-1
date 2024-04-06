const text = {
  value: "",
};
export const textReducer = (state = text, action) => {
  if (action.type === "TEXT") {
    return {
      ...state,
      value: action.payload.target.value,
    };
  }
  return state;
};


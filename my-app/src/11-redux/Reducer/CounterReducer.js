const intialValue = {
  inc: 1,
  dec: 10,
};
export const Countreducer = (state = intialValue, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      inc: state.inc + 1,
    };
  } else if (action.type === "DEC") {
    return {
      ...state,
      dec: state.dec - 1,
    };
  }
  return state;
};

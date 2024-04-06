import {
  add,
  clear,
  data,
  err,
  error,
  load,
  loading,
} from "../Action/actionType";
export function loginreducer(
  state = {
    loading: false,
    data: [],
    error: false,
  },
  action
) {
  if (action.type === loading) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === data) {
    return {
      ...state,
      data: action.payload,
    };
  } else if (action.type === error) {
    return {
      ...state,
      error: true,
    };
  } else if (action.type === err) {
    return {
      ...state,
      error: false,
    };
  } else if (action.type === load) {
    return {
      ...state,
      loading: false,
    };
  } else {
    return state;
  }
}

export const loginAddreducer = (state = [], action) => {
  if (action.type === add) {
    return [...state, action.payload];
  } else if (action.type === clear) {
    return [];
  } else {
    return state;
  }
};

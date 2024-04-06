import { add, btn, clear, data, err, error, load, loading } from "./actionType";

function logOuttoogle() {
  return {
    type: btn,
  };
}

function Loading() {
  return {
    type: loading,
  };
}

function Data(users) {
  return {
    type: data,
    payload: users,
  };
}

function Error() {
  return {
    type: error,
  };
}

function Load() {
  return {
    type: load,
  };
}

function Err() {
  return {
    type: err,
  };
}

function Add(data) {
  return {
    type: add,
    payload: data,
  };
}

function Clear() {
  return {
    type: clear,
  };
}

function loginData() {
  let url = "https://jsonplaceholder.typicode.com/comments";
  return async (dispatch) => {
    dispatch(Loading());
    dispatch(Err());
    try {
      const response = await fetch(url);
      const users = await response.json();
      dispatch(Data(users));
      dispatch(Load());
    } catch (error) {
      dispatch(Error());
      console.log(error);
    }
  };
}

export { loginData, logOuttoogle, Add, Clear };

import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      Add: {
        ...state.Add,
        count: Math.floor(state.Add.count + action.paylod),
      },
    };
  } else if (action.type === "CADD") {
    return {
      ...state,
      Add: {
        ...state.Add,
        count: 0,
      },
    };
  } else if (action.type === "SUB") {
    return {
      ...state,
      Sub: {
        ...state.Sub,
        count: Math.floor(state.Sub.count - action.paylod),
      },
    };
  } else if (action.type === "CSUB") {
    return {
      ...state,
      Sub: {
        ...state.Sub,
        count: 0,
      },
    };
  } else if (action.type === "MUL") {
    return {
      ...state,
      Mul: {
        ...state.Mul,
        count: Math.floor(state.Mul.count * action.paylod),
      },
    };
  } else if (action.type === "CMUL") {
    return {
      ...state,
      Mul: {
        ...state.Mul,
        count: 0,
      },
    };
  } else if (action.type === "DIV") {
    return {
      ...state,
      Div: {
        ...state.Div,
        count: Math.floor(state.Div.count / action.paylod),
      },
    };
  } else if (action.type === "CDIV") {
    return {
      ...state,
      Div: {
        ...state.Div,
        count: 0,
      },
    };
  } else if (action.type === "MOD") {
    return {
      ...state,
      Mod: {
        ...state.Mod,
        count: Math.floor(state.Mod.count % action.paylod),
      },
    };
  } else if (action.type === "CMOD") {
    return {
      ...state,
      Mod: {
        ...state.Mod,
        count: 0,
      },
    };
  }
  return state;
};
const Index = () => {
  let intialState = {
    Add: {
      count: 0,
    },
    Sub: {
      count: 16,
    },
    Mul: {
      count: 1,
    },
    Div: {
      count: 20,
    },
    Mod: {
      count: 13,
    },
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleAdd = () => {
    if (state.Add.count >= 0 && state.Add.count < 20) {
      dispatch({ type: "ADD", paylod: 2 });
    } else {
      dispatch({ type: "CADD" });
    }
  };
  const SetAddColor = {
    color: state.Add.count <= 10 ? "red" : "blue",
  };
  const handleSub = () => {
    if (state.Sub.count >= 0 && state.Sub.count < 20) {
      dispatch({ type: "SUB", paylod: 2 });
    } else {
      dispatch({ type: "CSUB" });
    }
  };
  const SetSubColor = {
    color: state.Sub.count <= 10 ? "red" : "blue",
  };
  const handleMul = () => {
    if (state.Mul.count >= 0 && state.Mul.count < 20) {
      dispatch({ type: "MUL", paylod: 2 });
    } else {
      dispatch({ type: "CMUL" });
    }
  };
  const SetMulColor = {
    color: state.Mul.count <= 10 ? "red" : "blue",
  };
  const handleDiv = () => {
    if (state.Div.count >= 0 && state.Div.count <= 20) {
      dispatch({ type: "DIV", paylod: 2 });
    } else {
      dispatch({
        type: "CDIV",
      });
    }
  };
  const SetDivColor = {
    color: state.Div.count <= 10 ? "red" : "blue",
  };
  const handleMod = () => {
    if (state.Mod.count >= 0 && state.Mod.count <= 20) {
      dispatch({ type: "MOD", paylod: 2 });
    } else {
      dispatch({ type: "CMOD" });
    }
  };
  const SetModColor = {
    color: state.Mod.count <= 10 ? "red" : "blue",
  };
  return (
    <>
      <h1 style={SetAddColor}>{state.Add.count}</h1>
      <button onClick={handleAdd}>+2</button>
      <h1 style={SetSubColor}>{state.Sub.count}</h1>
      <button onClick={handleSub}>-2</button>
      <h1 style={SetMulColor}>{state.Mul.count}</h1>
      <button onClick={handleMul}>*2</button>
      <h1 style={SetDivColor}>{state.Div.count}</h1>
      <button onClick={handleDiv}>/2</button>
      <h1 style={SetModColor}>{state.Mod.count}</h1>
      <button onClick={handleMod}>%2</button>
    </>
  );
};
export default Index;

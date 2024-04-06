import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      message: {
        ...state.message,
        id: Date.now().toString(),
        text: action.paylod,
      },
    };
  } else if (action.type === "ADD") {
    return {
      ...state,
      list: [...state.list, state.message],
    };
  } else if (action.type === "CLEAR_MESSAGE") {
    return {
      ...state,
      message: {
        ...state.message,
        id: "",
        text: "",
      },
    };
  } else if (action.type === "DELETE") {
    let newdata = state.list.filter((eachItem) => {
      return action.paylod !== eachItem.id;
    });
    return {
      ...state,
      list: newdata,
    };
  } else if (action.type === "EDIT") {
    let Data = state.list.find((eachItem) => {
      return action.paylod === eachItem.id;
    });
    return {
      ...state,
      message: {
        ...state.message,
        id: Data.id,
        text: Data.text,
      },
      error: {
        ...state.error,
        id: Data.id,
        isError: true,
      },
    };
  } else if (action.type === "EDIT_CHANGE") {
    let newData = state.list.map((eachItem) => {
      if (action.paylod === eachItem.id) {
        return (state.message = {
          ...state.message,
          id: eachItem.id,
          text: state.message.text,
        });
      } else {
        return eachItem;
      }
    });
    return {
      ...state,
      message: {
        ...state.message,
        id: " ",
        text: " ",
      },
      list: newData,
      error: {
        ...state.error,
        id: " ",
        isError: false,
      },
    };
  } else if (action.type === "CLEAR") {
    return {
      ...state,
      list: [],
      message: {
        ...state.message,
        id: "",
        text: "",
      },
      error: {
        ...state.error,
        id: "",
        isError: "",
      },
    };
  } else {
    return state;
  }
};
const Index = () => {
  const intialState = {
    message: {
      id: "",
      text: "",
    },
    list: [],
    error: {
      id: "",
      isError: false,
    },
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleAdd = () => {
    dispatch({ type: "ADD" });
    dispatch({ type: "CLEAR_MESSAGE" });
  };
  const handleDel = (id) => {
    dispatch({ type: "DELETE", paylod: id });
  };
  const handleEdit = (id) => {
    dispatch({ type: "EDIT", paylod: id });
  };
  const handleChange = () => {
    dispatch({ type: "EDIT_CHANGE", paylod: state.error.id });
  };
  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };
  return (
    <>
      <h1>These is Todo List</h1>
      <hr />
      <input
        type="text"
        placeholder="Enter some Text"
        value={state.message.text}
        onChange={(e) => {
          dispatch({ type: "CHANGE", paylod: e.target.value });
        }}
      />
      {state.error.isError ? (
        <button
          onClick={handleChange}
          style={{
            width: "100px",
            height: "20px",
            backgroundColor: "#baf5bd",
            margin: "10px",
          }}
        >
          EDIT
        </button>
      ) : (
        <button
          onClick={() => handleAdd()}
          style={{
            width: "100px",
            height: "20px",
            backgroundColor: "#baf5bd",
            margin: "10px",
          }}
        >
          ADD
        </button>
      )}
      <button
        onClick={handleClear}
        style={{ width: "100px", height: "20px", backgroundColor: "skyblue" }}
      >
        CLEARALL
      </button>
      <hr />
      {state.list.length <= 0 && (
        <h1 style={{ fontSize: "30px", color: "red" }}>There is no Data </h1>
      )}
      <ul style={{ listStyleType: "none" }}>
        {state.list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id} style={{ border: "2px solid black", margin: "5px" }}>
              <span style={{ fontSize: "30px" }}>{text}</span>
              <button
                onClick={() => handleDel(id)}
                style={{
                  width: "100px",
                  height: "20px",
                  backgroundColor: "#ebce3f",
                  margin: "10px",
                }}
              >
                DELETE
              </button>
              <button
                style={{
                  width: "100px",
                  height: "20px",
                  backgroundColor: "yellow",
                  margin: "10px",
                }}
                onClick={() => handleEdit(id)}
              >
                EDIT
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Index;

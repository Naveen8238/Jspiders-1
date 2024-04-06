import React, { useEffect, useReducer, useState } from "react";
import "./products.css";
const reducer = (state, action) => {
  if (action.type === "SETDATA") {
    return {
      ...state,
      data: action.payload,
    };
  } else if (action.type === "SETLOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  } else if (action.type === "SETERROR") {
    return {
      ...state,
      error: {
        ...state.error,
        isError: action.payload,
      },
    };
  } else if (action.type === "SETLOAD") {
    return {
      ...state,
      loading: action.payload,
    };
  } else if (action.type === "SETERR") {
    return {
      ...state,
      error: {
        ...state.error,
        isError: action.payload.isError,
        msg: action.payload.msg,
      },
    };
  }
  return state;
};
const Products = () => {
  const initalData = {
    data: null,
    loading: false,
    error: {
      isError: false,
      msg: "",
    },
  };
  const [state, dispatch] = useReducer(reducer, initalData);
  const [count, setCount] = useState(0);
  const fetchApi = async (url) => {
    dispatch({ type: "SETLOADING", payload: true });
    dispatch({ type: "SETERROR", payload: false });
    try {
      const respone = await fetch(url);
      const data = await respone.json();
      dispatch({ type: "SETDATA", payload: data });
      dispatch({ type: "SETLOAD", payload: false });
      setCount(data.products.length);
      if (respone.status === 404) {
        throw new Error(" data not found ");
      }
    } catch (error) {
      dispatch({ type: "SETLOAD", payload: false });
      dispatch({
        type: "SETERR",
        payload: {
          isError: true,
          msg: error.message || "something went wrong",
        },
      });
    }
  };
  useEffect(() => {
    fetchApi("https://dummyjson.com/products");
  }, []);
  const handleSelect = (e) => {
    if (e.target.value === "A-Z") {
      let sorting = state.data.products.sort((a, b) => {
        return a.brand.localeCompare(b.brand);
      });
      return {
        ...state,
        data: sorting,
      };
    }
  };
  return (
    <section>
      <div className="head">
        <input type="text" placeholder="please enter some text" />
        <select style={{ margin: "30px" }} onChange={handleSelect}>
          <option>please select option</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="low-high">low-high</option>
          <option value="high-low">high-low</option>
        </select>
        <span>totol count : {count}</span>
      </div>
      <div className="items">
        {state.data &&
          state.data.products.map((eachItem) => {
            const {
              id,
              description,
              brand,
              price,
              rating,
              images,
              stock,
              title,
            } = eachItem;
            return (
              <div key={id} className="card">
                <h1>Brand={brand}</h1>
                <span>{title}</span>
                <img src={images[0]} alt={id} />
                <span>price={price}</span>
                <span>rating={rating}</span>
                <span>stock={stock}</span>
                <span>{description}</span>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default Products;

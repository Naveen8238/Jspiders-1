import React from "react";
import useCounter from "./useCount";

const Index2 = ()=>{
    const [count,increment,decrement,reset] =useCounter()
    return (
        <>
            <h1>Counter== {count}</h1>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>

        </>
    )
}
export default Index2;
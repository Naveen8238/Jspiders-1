import React from "react";
import useCounter from "./useCount";


const Index = ()=>{
    const [count,increment,decrement,reset]=useCounter(10)
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
export default Index;
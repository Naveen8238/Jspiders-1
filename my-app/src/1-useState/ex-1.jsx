import React, { useState } from "react";
const Index = ()=>{
        const [count,setCount]=useState(0)
       return(
        <React.Fragment>
            <button  onClick={()=>setCount(count+1)}>-</button>
            <span>{count}</span>
            <button onClick={()=>setCount(count+1)}>+</button>
        </React.Fragment>
    )
}
export default Index;

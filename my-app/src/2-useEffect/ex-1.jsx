import React, { useEffect, useState } from "react";
const Index=()=>{
    const [count,setcount] = useState(0)
    const [pagewidth,setPagewidth]= useState(window.innerWidth)
    useEffect(()=>{
        const resizehandle= window.addEventListener('resize',()=>{
            setPagewidth(window.innerWidth)
        })
        console.log("Hello I am coming useEffect",count)
        return ()=>{
            console.log("I am removing")
            window.removeEventListener('resize',resizehandle)
        }
    });
    return (
        <>
            <h1>Learn useEffect</h1>
            <h1>{pagewidth}</h1>
            <button onClick={()=>setcount(count-1)}>-</button>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>+</button>
        </>
    )
}
export default Index;
import React, { useEffect, useState ,useRef} from "react";
const Index= ()=>{ 
    const [firstName ,setFirstName] = useState("");
    const inputDom=useRef("");
    useEffect(()=>{
        console.log(inputDom)
    })
    const focus =()=>{
        inputDom.current.focus();
    }
    return (
        <>
            <input 
            ref={inputDom}
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e)=>setFirstName(e.target.value)}
            />
            <h5>Typing:{firstName}</h5>
            <button onClick={focus}>Focus</button>
        </>
    )
}
export default Index;
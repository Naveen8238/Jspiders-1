import React, { useContext } from "react";
import { UserContext } from "./context";
const SubChildComponent = ()=>{
    const data=useContext(UserContext)
    const {firstName,lastName,email} = data;
    return (
        <>
            <h1>SubChildComponent</h1>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
        </>
    )
}
export default SubChildComponent;
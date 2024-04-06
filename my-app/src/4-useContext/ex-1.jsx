import React, { useState } from "react";
const ParentComponent = ()=>{
    const [user,setUser] = useState({
        firstName:"Naveen",
        lastName:"Kumar"
    })
    return (
        <>
            <h1>useContext Parent</h1>
            <ChildComponent userDetails={user}/>
        </>
    )
}
const ChildComponent =(props)=>{
    return (
        <>
            <h1>Children</h1>
            <SubChildComponent userDetails={props}/>
        </>
    )
}
const SubChildComponent =(props)=>{
    console.log(props)
    return (
        <>
            <h1>SubChildren</h1>
            <h1>{props.userDetails.userDetails.firstName}</h1>
            <h2>{props.userDetails.userDetails.lastName}</h2>
        </>
    )
}
export default ParentComponent;
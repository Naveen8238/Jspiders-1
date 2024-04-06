import React from "react";
import SubChildComponent from "./subchild";
const ChildComponent = ()=>{
    return (
        <>
            <h1>ChildComponent</h1>
            <SubChildComponent/>
        </>
    )
}
export default ChildComponent;
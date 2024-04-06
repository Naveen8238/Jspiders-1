import React, { useCallback, useState } from "react";
import Button from "./button";
import Title from "./Title";
import Count from "./count";
const ParentComponent = ()=>{
    const [age,Setage] = useState(0)
    const [salary,setSalray]=useState(7000)
    const incrementAge =useCallback(()=>{
        Setage(age+1)
    },[age])
    const incrementSalary= useCallback(()=>{
        setSalray(salary+1000)
    },[salary])
    return (
        <>
            <Title/>
            <Count text={"age"} number={age} />
            <Button clickhandler={incrementAge} children={"IncAge"}/>
            <Count text={"salary"} number={salary} />
            <Button clickhandler={incrementSalary} children={"IncSal"}/>
        </>
    )
}
export default ParentComponent;
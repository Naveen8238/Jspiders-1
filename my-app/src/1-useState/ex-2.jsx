import React, { useState } from "react";
const Index = ()=>{
    const initialdata = {
        firstname:"Naveen",
        lastname:"Kumar",
        age:"21"
    }
    const [data,setData] = useState(initialdata)
    return (
        <>
            <h1>My name is : {data.firstname}</h1>
            <button onClick={()=>setData({
                ...data,
                firstname:"Rocky"
            })}>ChangeFirstname</button>
            <h1>My name is :{data.lastname}</h1>
            <button onClick={()=>setData({
                ...data,
                lastname:"Royal"
            })}>changeLastname</button>
            <h1>age:{data.age}</h1>
        </>
    )
}
export default Index;
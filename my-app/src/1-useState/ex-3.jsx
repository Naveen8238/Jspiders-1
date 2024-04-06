import React, { useState } from "react";

const  Index = ()=>{
    const initialData= [{
        firstName:"Naveen",
        lastName:"Chennamsetty",
        age:21,
        },
        {
            firstName:"Nandu",
            lastName:"Chennamsetty",
            age:18,
        },
        {
            firstName:"Nari",
            lastName:"Chennamsetty",
            age:17,
        }
    ]
    const [data,setData]=useState(initialData)
    const handleDelete = (age)=>{
        let newData=data.filter((eachItem)=>{
            return eachItem.age !== age;
        })
        setData(newData)
    }
    return (
        <>
            <h1>User Data</h1>
            {
                data.map((eachItem)=>{
                    const  {firstName,lastName,age} = eachItem;
                     return (
                        <>
                            <h1>my firstName : {firstName}</h1>
                            <strong>my lastName : {lastName}</strong>
                            <h5>age:{age}</h5>
                            <button type="submit" onClick={()=>handleDelete(age)}>DElETE</button>
                        </>
                     )
                })
            }
        </>
    )
}
export default Index;
import React from "react";
import useApi from "./useAPi";
const url="https://jsonplaceholder.typicode.com/posts"
const Index1=()=>{
    const [userData,loading,error]=useApi(url)
    if(loading){
        return <h1>Loading....</h1>
    }
    if(error){
        return <h1>Something happend</h1>
    }
    return (
        <div>
            <h5>users</h5>
            <ul>
            {
                userData.map((eachUser)=>{
                    return <li key={eachUser.id}>
                        <h1>{eachUser.title}</h1>
                    </li>
                })
            }
            </ul>
        </div>
    )
}
export default Index1;
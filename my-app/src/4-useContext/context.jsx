import React from "react";
const initialState ={
    firstName:"Naveen",
    lastName:"Kumar",
    email:"email@gmail.com"
}
export const UserContext = React.createContext();
export const UserContextProvider = ({children})=>{
    return <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
}
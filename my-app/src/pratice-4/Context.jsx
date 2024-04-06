import React from "react";
export const userContext = React.createContext();
const data = {
  firstName: "Naveen",
  lastName: "Chennamsetty",
};
const UserContextProvider = ({ children }) => {
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};
export default UserContextProvider;

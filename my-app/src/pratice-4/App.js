import React from "react";
import ParentComponent from "./pratice-4/Parent";
import Child from "./pratice-4/child";
import SubChild from "./pratice-4/SubChild";
// export const userContext = React.createContext();
function App() {
  // const data = {
  //   firstName: "Naveen",
  //   lastName: "chennamsetty",
  // };
  return (
    <>
      <ParentComponent />
      <Child />
      <SubChild />
    </>
  );
}
{
  /* <userContext.Provider value={data}>
        <ParentComponent />
        <Child />
        <SubChild />
      </userContext.Provider> */
}

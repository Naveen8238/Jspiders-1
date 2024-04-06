import React, { useContext } from "react";
// import { userContext } from "../App";
import { userContext } from "./Context";
const SubChild = () => {
  const userData = useContext(userContext);
  console.log(userData);
  return (
    <>
      <h1>This is SubChild Component</h1>
      <h1>{userData.firstName}</h1>
      <hr />
      {/* {
        <userContext.Consumer>
          {(data) => {
            return (
              <>
                <h1>{data.firstName}</h1>
                <h2>{data.lastName}</h2>
              </>
            );
          }}
        </userContext.Consumer>
      } */}
    </>
  );
};
export default SubChild;

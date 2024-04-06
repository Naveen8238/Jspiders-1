import React from "react";
import { useLocation } from "react-router-dom";
const Employee = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <h1>This is employee Details: {state[0].name}</h1>
      <hr />
      {state.map(
        ({ id, name, username, email, phone, website, address, company }) => {
          return (
            <div key={id}>
              <h1>id:{id}</h1>
              <h1>name:{name}</h1>
              <h2>userName: {username}</h2>
              <h2> email: {email}</h2>
              <h2>phone:{phone}</h2>
              <h2>website:{website}</h2>
              <h2>
                address Details <hr />
                <span> street :{address.street}</span>
                <br />
                <span>suite:{address.suite}</span>
                <br />
                <span>city:{address.city}</span>
                <br />
                <span>zipcode:{address.zipcode}</span>
                <br />
              </h2>
              <h2>
                Company Details
                <hr />
                <span> companyname :{company.name}</span>
                <br />
                <span>catchPhrase:{company.catchPhrase}</span>
                <br />
                <span>companyBs:{company.bs}</span>
              </h2>
            </div>
          );
        }
      )}
    </>
  );
};
export default Employee;

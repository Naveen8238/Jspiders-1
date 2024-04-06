import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./Userdata";

function UserDetails() {
  const { userId } = useParams();
  const userDetails = data.find((eachItem) => {
    return eachItem.id == userId;
  });
  return (
    <div>
      <h1>Users Details</h1>
      <h2>{userDetails.name}</h2>
      <h3>{userDetails.email}</h3>
      <h3>{userDetails.phone}</h3>
    </div>
  );
}

export default UserDetails;

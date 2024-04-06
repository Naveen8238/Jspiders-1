import React from "react";
import { Link } from "react-router-dom";
import { data } from "./Userdata";
function Users() {
  const card = {
    backgroundColor: "lightblue",
    padding: "10px",
  };
  return (
    <div>
      <h1>Users</h1>
      <div className="cardcontainer">
        {data.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <Link key={id} to={`/users/${id}`}>
              <article style={card}>
                <h3>{name}</h3>
                <h5>{email}</h5>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Users;

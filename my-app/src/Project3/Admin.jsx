import React from "react";
import "./Style.css";
const Admin = () => {
  return (
    <section>
      <div>User List</div>
      <span>
        <h4>Total Count : 4</h4>
        <button className="btn">Create User</button>
      </span>
      <div className="container">
        <div className="main">
          <span>
            <h4>Search</h4>
            <input type="text" placeholder="Enter Search KeyWord" />
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Unique id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>gender</th>
              <th>Course</th>
              <th>Create date</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};
export default Admin;

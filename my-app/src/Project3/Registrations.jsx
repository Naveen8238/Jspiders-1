import React from "react";
import "./Style.css";
const Registration = () => {
  return (
    <section>
      <div>Create User</div>
      <form>
        <label for="f_Name">Name</label>
        <input type="text" name="f_Name" />
        <br />
        <label for="f_Email">Email</label>
        <input type="text" name="f_Email" />
        <br />
        <label for="f_Mobile">Mobile</label>
        <input type="text" name="f_Mobile" />
        <br />
        <label for="f_Designation">Designation</label>
        <select name="f_Designation">
          <option>Sales</option>
          <option>HR</option>
          <option>Operations</option>
        </select>
        <br />
        <label for="f_gender">Gender</label>
        <label for="gender">Male</label>
        <input type="radio" name="gender" />
        <label for="gender">Female</label>
        <input type="radio" name="gender" />
        <br />
        <label for="f_course">Course</label>
        <label for="course">MCA</label>
        <input type="checkbox" name="course" />
        <label for="course">BCA</label>
        <input type="checkbox" name="course" />
        <label for="course">BSC</label>
        <input type="checkbox" name="course" />
        <br />
        <label for="f_image">Img Upload</label>
        <input type="file" name="f_image" />
        <br />
        <button>Login</button>
      </form>
    </section>
  );
};
export default Registration;

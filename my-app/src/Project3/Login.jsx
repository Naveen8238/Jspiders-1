import React from "react";
import "./Style.css";
const Login = () => {
  return (
    <section>
      <div>Login page</div>
      <table>
        <thead>
          <tr>
            <td>Login Username</td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>password</td>
            <td>
              <input type="password" />
            </td>
          </tr>
        </tbody>
      </table>
      <button>Login</button>
    </section>
  );
};
export default Login;

import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <label>UserName</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter userName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          login(name);
          navigate("/", { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
}
export default Login;

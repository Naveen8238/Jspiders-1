import React, { useState } from "react";
const Index = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleChange = (e, name) => {
    if (name === "firstName") {
      setfirstName(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "pass") {
      setPass(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      firstName: firstName,
      email: email,
      pass: pass,
    };
    console.log(obj);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="enter some text"
          value={firstName}
          onChange={(e) => handleChange(e, "firstName")}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter some email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="enter some password"
          value={pass}
          onChange={(e) => handleChange(e, "pass")}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
export default Index;

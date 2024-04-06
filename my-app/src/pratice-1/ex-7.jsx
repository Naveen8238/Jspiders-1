import React, { useState } from "react";
const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e, name) => {
    if (name === "firstName") {
      setFirstName(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "pass") {
      setPass(e.target.value);
    }
  };
  const handleSubmitDel = (e) => {
    e.preventDefault();
    let obj = {
      firstName: firstName,
      pass: pass,
      email: email,
    };
    console.log(obj);
  };
  return (
    <form onSubmit={handleSubmitDel}>
      <input
        type="text"
        placeholder="enter some text"
        value={firstName}
        onChange={(e) => handleSubmit(e, "firstName")}
      />
      <input
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => handleSubmit(e, "email")}
      />
      <input
        type="password"
        placeholder="enter your password"
        value={pass}
        onChange={(e) => handleSubmit(e, "pass")}
      />
      <button>submit</button>
    </form>
  );
};
export default Index;

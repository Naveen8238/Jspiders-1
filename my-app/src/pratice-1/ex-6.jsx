import React, { useState } from "react";

const Index = () => {
  const data = {
    name: "",
    email: "",
    pass: "",
  };
  const [user, setUser] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: user.name,
      email: user.email,
      pass: user.pass,
    };
    console.log(obj);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />
      <br />
      <input
        type="text"
        placeholder="enter email"
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        value={user.pass}
        onChange={(e) =>
          setUser({
            ...user,
            pass: e.target.value,
          })
        }
      />
      <br />
      <button>submit</button>
    </form>
  );
};

export default Index;

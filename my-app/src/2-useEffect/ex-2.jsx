import React, { useState, useEffect } from "react";
const url =
  "https://bkqawscf.winccern.live/member/playerService/queryPlayerInfo";
const Index = () => {
  const [users, setUsersdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState({ msg: "", status: false });
  const fetechUserData = async (url) => {
    setLoading(true);
    setError({ msg: "", status: false });
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsersdata(data);
      setLoading(false);
      setError({ msg: "", status: false });
      if (response.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      setLoading(false);
      setError({ status: true, msg: error.message || "something went wrong" });
    }
  };
  useEffect(() => {
    fetechUserData(url);
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (isError.isError) {
    return <h1>{isError.msg}</h1>;
  }
  console.log(users);
  return (
    <div>
      <h1>useState-1</h1>
      <ul>
        {users.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;

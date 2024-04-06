import React, { useEffect, useState } from "react";
import Banner from "./Header";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [users, setUsers] = useState();
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();
  const data = async (url) => {
    try {
      const response = await fetch(url);
      const user = await response.json();
      setUsers(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data("https://jsonplaceholder.typicode.com/users");
  }, []);
  const handleVeiw = () => {
    setBtn(!btn);
  };
  const handleEdit = (id) => {
    const Data = users.filter((eachItem) => {
      return eachItem.id === id;
    });
    navigate("/employee", { state: Data });
  };
  return (
    <>
      <Banner />
      <h1>This is User information</h1>
      <p>
        What is the meaning of lorem ipsum? placeholder Lorem ipsum, placeholder
        or dummy text used in typesetting and graphic design for previewing
        layouts. It features scrambled Latin text, which emphasizes the design
        over content of the layout. It is the standard placeholder text of the
        printing and publishing industries
      </p>
      <button
        style={{ width: "300px", height: "40px", color: "blueviolet" }}
        onClick={handleVeiw}
      >
        veiw employees
      </button>
      <hr />
      {btn && (
        <table border={"2px"} cellPadding={"10px"}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>phone</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, username, email, phone, website }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <button onClick={() => handleEdit(id)}>{name}</button>
                  </td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Main;

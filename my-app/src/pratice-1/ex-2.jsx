import React, { useState } from "react";
const Index = () => {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);
  const [message, setMessage] = useState([
    {
      mess: "",
      length: 0,
    },
  ]);
  const ErrorMess = "something went wrong";
  const handleSubmit = () => {
    setError(false);
    setMessage({
      ...data,
      mess: text,
      length: text.length,
    });
    if (message.length < 5) {
      setError(true);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
      {isError ? (
        ErrorMess
      ) : (
        <div>
          <h1>{message.mess}</h1>
          <h1>{message.length}</h1>{" "}
        </div>
      )}
    </div>
  );
};
export default Index;

import React, { useRef, useState } from "react";
const Index = () => {
  const [error, setError] = useState(false);
  const f_name = useRef("");
  const f_last = useRef("");
  const f_email = useRef("");
  const f_pass = useRef("");
  const f_cpass = useRef("");
  const f_gender = useRef("");
  const f_addr = useRef("");
  const handleSubmit = () => {
    setError(true);
  };
  return (
    <>
      <label>firstName</label>
      <input type="text" placeholder="enter some firstName" ref={f_name} />
      <br />
      <label>lastName</label>
      <input type="text" placeholder="enter some lastName" ref={f_last} />
      <br />
      <label>email:</label>
      <input type="text" placeholder="enter some email" ref={f_email} />
      <br />
      <label>password:</label>
      <input type="text" placeholder="enter some password" ref={f_pass} />
      <br />
      <label>Confirm password:</label>
      <input type="text" placeholder="enter confirm password" ref={f_cpass} />
      <br />
      <label>gender</label>
      <label>male</label>
      <input type="radio" name="fgender" ref={f_gender} />
      <label>female</label>
      <input type="radio" name="fgender" ref={f_gender} />
      <br />
      <label>Address:</label>
      <textarea rows={10} cols={20} ref={f_addr}></textarea>
      <br />
      <button onClick={handleSubmit}>submit</button>
      {error && (
        <ChildComponent
          f_name={f_name.current.value}
          f_cpass={f_cpass.current.value}
          f_gender={f_gender.current.value}
          f_addr={f_addr.current.value}
          f_last={f_last.current.value}
          f_email={f_email.current.value}
          f_pass={f_pass.current.value}
        />
      )}
    </>
  );
};
const ChildComponent = ({
  f_addr,
  f_cpass,
  f_email,
  f_name,
  f_last,
  f_pass,
  f_gender,
}) => {
  return (
    <>
      <h1>name:{f_name}</h1>
      <h1>lastName:{f_last}</h1>
      <h1>email:{f_email}</h1>
      <h1>gender:{f_gender}</h1>
      <h1>password:{f_pass}</h1>
      <h1>confirmpassword:{f_cpass}</h1>
      <h1>address:{f_addr}</h1>
    </>
  );
};
export default Index;

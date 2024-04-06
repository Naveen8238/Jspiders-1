import React from "react";
const Button = ({ Colors, sethandler }) => {
  const handleChange = () => {
    let cgColor = " ";
    for (let i = 0; i < 6; i++) {
      cgColor += Colors[Math.floor(Math.random() * 16)];
    }
    cgColor = `#${cgColor}`;
    cgColor = cgColor
      .slice(0, 2)
      .trim()
      .concat(cgColor.slice(2, cgColor.length));
    sethandler(cgColor);
  };
  return (
    <>
      <button onClick={handleChange}>bgchange</button>
    </>
  );
};
export default Button;

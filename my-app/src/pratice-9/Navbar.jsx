import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
    columnGap: "30px",
    backgroundColor: "Yellowgreen",
    fontSize: "25px",
    textAlign: "center",
  };
  const nav = (obj) => {
    console.log(obj);
  };
  return (
    <div style={navStyles}>
      <NavLink to="/" style={nav}>
        Home
      </NavLink>
      <NavLink to="/about" style={nav}>
        About
      </NavLink>
      <NavLink to="/contact" style={nav}>
        contact
      </NavLink>
    </div>
  );
};
export default Navbar;

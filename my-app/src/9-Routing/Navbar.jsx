import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
function Navbar() {
  const { user } = useAuth();
  const navStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
      marginLeft: "20px",
    };
  };
  return (
    <div>
      <nav style={{ padding: "20px", backgroundColor: "lightblue" }}>
        <NavLink style={navStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navStyles} to="/contact">
          Contact
        </NavLink>
        <NavLink style={navStyles} to="/projects">
          Projects
        </NavLink>
        <NavLink style={navStyles} to="/users">
          Users
        </NavLink>
        {user ? (
          <NavLink style={navStyles} to="/logout">
            Logout
          </NavLink>
        ) : (
          <NavLink style={navStyles} to="/login">
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
}
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div>Logo</div>
      <div
        style={{
          backgroundColor: "skyblue",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link>Home</Link>
        <Link>Registrations</Link>
        <Link>Admin-</Link>
        <Link>Logout</Link>
      </div>
    </nav>
  );
};
export default Nav;

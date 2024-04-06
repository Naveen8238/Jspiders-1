import React from "react";
import { Link, Outlet } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <nav>
        <Link to="/projects/featured" style={{ marginRight: "30px" }}>
          Featured
        </Link>
        <Link to="/projects/NewProject" style={{ marginRight: "30px" }}>
          New Projects
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Projects;

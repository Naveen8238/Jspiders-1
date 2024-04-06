import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Privateroute;

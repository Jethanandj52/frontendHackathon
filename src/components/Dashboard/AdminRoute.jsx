// src/components/AdminRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== "admin@gmail.com") {
    return <Navigate to="/Home" replace />;
  }

  return children;
};

export default AdminRoute;

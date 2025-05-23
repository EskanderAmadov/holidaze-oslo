import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Beskytter admin-ruter kun for venue managers
const ManagerRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (!user.venueManager) return <Navigate to="/" replace />;

  return children;
};

export default ManagerRoute;

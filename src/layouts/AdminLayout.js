import React from "react";
import Navbar from "../components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h2 className="mb-4">Admin Dashboard</h2>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;

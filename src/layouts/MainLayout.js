import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        {children}
      </main>
      <footer className="text-center py-3 bg-light mt-auto">
        <small>&copy; {new Date().getFullYear()} Holidaze. All rights reserved.</small>
      </footer>
    </>
  );
};

export default MainLayout;

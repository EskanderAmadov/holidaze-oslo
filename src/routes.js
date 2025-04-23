// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import VenueDetail from "./pages/VenueDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateVenue from "./pages/CreateVenue";
import EditVenue from "./pages/EditVenue";
import AdminDashboard from "./pages/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/venue/:id" element={<VenueDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/venue/create" element={<CreateVenue />} />
      <Route path="/venue/edit/:id" element={<EditVenue />} />
      {/* 404 fallback */}
      <Route path="*" element={<h1>404 - Side ikke funnet</h1>} />
    </Routes>
  );
}

export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VenueDetail from "./pages/VenueDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateVenue from "./pages/CreateVenue";
import EditVenue from "./pages/EditVenue";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/venue/:id" element={<VenueDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute requireManager>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/venue/create"
        element={
          <ProtectedRoute requireManager>
            <CreateVenue />
          </ProtectedRoute>
        }
      />
      <Route
        path="/venue/edit/:id"
        element={
          <ProtectedRoute requireManager>
            <EditVenue />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1>404 - Side ikke funnet</h1>} />
    </Routes>
  );
}

export default AppRoutes;

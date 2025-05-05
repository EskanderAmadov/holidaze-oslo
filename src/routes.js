import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./pages/Home";
import VenueDetail from "./pages/VenueDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateVenue from "./pages/CreateVenue";
import EditVenue from "./pages/EditVenue";
import AdminDashboard from "./pages/AdminDashboard";

// Route guards
import PrivateRoute from "./components/PrivateRoute";
import ManagerRoute from "./components/ManagerRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/venue/:id" element={<MainLayout><VenueDetail /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/register" element={<MainLayout><Register /></MainLayout>} />

      {/* Protected routes */}
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <MainLayout>
              <Profile />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Manager-only routes */}
      <Route
        path="/admin"
        element={
          <ManagerRoute>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ManagerRoute>
        }
      />
      <Route
        path="/venue/create"
        element={
          <ManagerRoute>
            <AdminLayout>
              <CreateVenue />
            </AdminLayout>
          </ManagerRoute>
        }
      />
      <Route
        path="/venue/edit/:id"
        element={
          <ManagerRoute>
            <AdminLayout>
              <EditVenue />
            </AdminLayout>
          </ManagerRoute>
        }
      />

      {/* 404 fallback */}
      <Route path="*" element={<MainLayout><h1>404 - Page Not Found</h1></MainLayout>} />
    </Routes>
  );
}

export default AppRoutes;

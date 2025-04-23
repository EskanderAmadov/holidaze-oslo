// src/services/auth.js
import api from "./api";

// Login a user (returns user data including access token)
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errors?.[0]?.message || "Login failed");
  }
};

// Register a new user (requires stud.noroff.no email)
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errors?.[0]?.message || "Registration failed");
  }
};

// Logout by clearing local storage
export const logoutUser = () => {
  localStorage.removeItem("user");
};

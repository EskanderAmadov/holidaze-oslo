// src/services/api.js
import axios from "axios";

// 📌 Basert på beskrivelsen: https://v2.api.noroff.dev/
const API_BASE = "https://v2.api.noroff.dev/";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Automatisk token-innsetting hvis bruker er logget inn
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.accessToken) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }
  return config;
});

export default api;

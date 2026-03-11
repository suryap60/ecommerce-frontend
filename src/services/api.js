import axios from "axios";

// Use Render backend in production, localhost in dev
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"  // dev
    : "https://ecommerce-backend-u0t5.onrender.com/api"; // production

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
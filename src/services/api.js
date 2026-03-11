import axios from "axios";

// Determine if we are in production or development
const isProduction = window.location.hostname !== "localhost";

// Use Render backend in production, localhost in dev
const API_BASE_URL = isProduction
  ? "https://ecommerce-backend-u0t5.onrender.com/api" // Production backend
  : "http://localhost:5000/api";                       // Dev backend

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
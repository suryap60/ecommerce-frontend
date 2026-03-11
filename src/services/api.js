import axios from "axios";

// Use localhost for development, production URL for deployed app
const isProduction = window.location.hostname !== "localhost";

const API_BASE_URL = isProduction
  ? "https://ecommerce-backend-u0t5.onrender.com/api" // production backend
  : "http://localhost:5000/api";                       // local dev backend

export const API = axios.create({
  baseURL: API_BASE_URL,
});
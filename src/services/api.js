import axios from "axios";

// Use Render backend in production, localhost in dev
export const API = axios.create({
  baseURL: "https://ecommerce-backend-u0t5.onrender.com/api"
})

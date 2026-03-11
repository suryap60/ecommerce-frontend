import axios from "axios"

export const API = axios.create({
  baseURL: "https://ecommerce-backend-u0t5.onrender.com/api"
})
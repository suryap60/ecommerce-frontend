import axios from "axios"

export const API = axios.create({
  baseURL: "https://github.com/suryap60/ecommerce-backend/api"
})
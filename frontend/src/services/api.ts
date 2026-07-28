import axios from "axios";

const baseURL = import.meta.env.DEV
  ? "http://localhost:3333/api"
  : "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
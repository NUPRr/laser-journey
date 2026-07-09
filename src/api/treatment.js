import axios from "axios";

const API = axios.create({
  baseURL: "https://laser-journey-api.onrender.com/api",
});

API.interceptors.request.use((config) => {
  config.headers.Authorization =
    "Bearer " + localStorage.getItem("token");
  return config;
});

export default API;

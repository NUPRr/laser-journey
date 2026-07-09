import axios from "axios";

const API = axios.create({
  baseURL: "https://laser-journey-api.onrender.com/api",
});

export default API;

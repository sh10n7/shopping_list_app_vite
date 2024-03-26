import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // 共通のベースURL
});

export default api;
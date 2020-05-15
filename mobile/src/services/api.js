import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.102.68:3333"
});

export default api;

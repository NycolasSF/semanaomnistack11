import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.25.21:3331"
});

export default api;
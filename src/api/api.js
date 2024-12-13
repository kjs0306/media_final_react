import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // 백엔드 API URL
  headers: { 'Content-Type': 'application/json' },
});

export default api;
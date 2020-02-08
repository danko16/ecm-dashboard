import axios from 'axios';

export const Api = axios.create({
  baseURL: 'http://localhost:3000/admin',
  timeout: 4000,
  headers: {
    version: '1.0.0'
  }
});

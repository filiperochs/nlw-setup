import axios from 'axios';

const API_BASE_URL = 'http://192.168.2.113:3334';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
import axios from 'axios';

const API_TOKEN = 'lrsolimpio@gmail.com';
export const api = axios.create({
  baseURL: 'https://tiao.supliu.com.br/api',
  headers: {
    Authorization: API_TOKEN,
  },
});

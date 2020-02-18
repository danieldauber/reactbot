import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://dry-cliffs-98030.herokuapp.com/api/',
  baseURL: 'http://server.local:3333/api/',
});

export default api;

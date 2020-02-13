import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dry-cliffs-98030.herokuapp.com/api/',
});

export default api;

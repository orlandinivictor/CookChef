import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://protected-tor-32927.herokuapp.com/',
});

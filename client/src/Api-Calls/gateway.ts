import axios from 'axios';

import { getItemLocalStorage } from '../LocalStoragFuncation/getItemLocalStorage';
const token = getItemLocalStorage('jwt');
//window.location.origin||
const options = {
  baseURL: "http://localhost:5000",
  headers: { Authorization: 'Bearer ' + token },
};


const instance = axios.create(options);

export default instance;

// /api/user

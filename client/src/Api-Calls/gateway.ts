import axios from 'axios';

import { getItemLocalStorage } from '../LocalStoragFuncation/getItemLocalStorage';
const token = getItemLocalStorage('jwt');

const options = {
  baseURL: window.location.origin,
  headers: { Authorization: 'Bearer ' + token },
};
console.log("🚀 ~ file: gateway.ts ~ line 10 ~ options", options)

const instance = axios.create(options);

export default instance;

// /api/user

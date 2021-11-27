import axios from "axios";

import { getItemLocalStorage } from "../LocalStoragFuncation/getItemLocalStorage";
const token = getItemLocalStorage("jwt");


console.log("🚀 ~ file: gateway.ts ~ line 9 ~  process.env.REACT_APP_API_URL",  process.env.REACT_APP_API_URL)
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: "Bearer " + token },
});

export default instance;

// /api/user

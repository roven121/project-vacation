import axios from "axios";
import { getItemLocalStorage } from "../LocalStoragFuncation/getItemLocalStorage";
const token = getItemLocalStorage("jwt");


const instance = axios.create({
  baseURL: "https://vacation-project-3.herokuapp.com",
  headers: { Authorization: "Bearer " + token },
});

export default instance;

// /api/user

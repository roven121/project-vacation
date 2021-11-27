import instance from "./gateway";
import { RegisterConfig } from "../modals/RegisterModal/RegisterConfig";
const urlApi: string = "/api/user";

export const registerUser = async (user: RegisterConfig) => {
  const data = await instance.post<RegisterConfig>(`${urlApi}/register`, user);
  return data;
};

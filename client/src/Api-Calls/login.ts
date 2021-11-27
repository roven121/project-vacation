import instance from "./gateway";
import { ValuesLogin } from "../modals/LoginModal/ValuesLogin.modal";
import { DataLogin } from "../modals/LoginModal/DataLogin.modal";

const urlApi: string = "/api/user";

export const LoginUser = async ({ userName, password }: ValuesLogin) => {
  const data = await instance.post<DataLogin>(`${urlApi}/login`, {
    userName,
    password,
  });

  return data;
};

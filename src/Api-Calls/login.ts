import instance from "./gateway";
import { RegisterConfig } from "./modals/RegisterConfig";

const urlApi: string = "/api/user";
export interface DataLogin {
  jwt: string;
  userName: string;
  isAdministrator: boolean;
}

export const LoginUser = async (userName: string, password: string) => {
  const data = await instance.post<DataLogin>(`${urlApi}/login`, {
    userName,
    password,
  });
  return data;
};

// the function is working !!!!!
//return
// {

//     UserName: 'rrrr',
//     firstName: 'rrrr',
//     lastName: 'rrrr',
//     password: '$2b$04$i3W9nssRCn36GzxXaX0Jbu26BmSEdEQJH1SC0Cc6UgCM4gy5yZyyO',
//     isAdmin: 1
//   }

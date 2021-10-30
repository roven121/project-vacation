import instance from "./gateway";
import { RegisterConfig } from "./modals/RegisterConfig";
const urlApi: string = "/api/user";

//this work
export const registerUser = async (user: RegisterConfig) => {
  const data = await instance.post(`${urlApi}/register`, user);
  return data;
};

// useEffect(() => {
//     const data = async () => {
//       const result = await registerUser()
//       console.log(result);
//     }
//     data()
//   }, [""])

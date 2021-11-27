import { getItemLocalStorage } from "../../LocalStoragFuncation/getItemLocalStorage";
import instance from "../gateway";
const Token = getItemLocalStorage("jwt");

export const getAllVacationEspeciallyUser = (userName: any, token: string) => {
  
  const haveToken = Token ? Token : token;
  try {
    const results = instance.post(
      "/api/vacation/get-All-Vacation-especially-user",
      { userName },
      { headers: { Authorization: "Bearer " + haveToken } }
    );

    return results;
  } catch (error) {
  
  }
};

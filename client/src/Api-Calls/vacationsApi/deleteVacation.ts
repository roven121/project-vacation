import { getItemLocalStorage } from "../../LocalStoragFuncation/getItemLocalStorage";
import instance from "../gateway";

export const deleteVacation = async (id: number, jwt: string) => {
  try {
    const token = getItemLocalStorage("jwt");
    const data = await instance.delete<any>(
      `/api/vacation/delete-vacation/${id}`,
      { headers: { Authorization: "Bearer " + token } }
    );

    return data;
  } catch (er) {}
};

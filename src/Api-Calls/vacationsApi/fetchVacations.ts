import instance from "../gateway";
import { Vacation } from "./fetchVacation.modal";


export const getAllVacation = async () => {
  const data = await instance.get(`api/vacation`);
  console.log(data);
  
  return data;
};

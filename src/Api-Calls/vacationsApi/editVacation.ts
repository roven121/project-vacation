import { FormUpdateVacation } from "../../modals/FormUpdateVacation/FormUpdateVacation.modal";
import instance from "../gateway";
export interface EditVacation {
  isAdmin: boolean,
  description: string,
  price: number,
  checkIn: any,
  checkOut: any,
  id: number,
  jwt: string,
  img: string,
  destination: string
}
export const editVacation = async (
  isAdmin: boolean,
  description: string,
  price: number,
  checkIn: any,
  checkOut: any,
  id: number,
  jwt: string,
  img: string,
  destination: string
) => {
  console.log({id},{id});
  
  const data = await instance.put<FormUpdateVacation>(
    `/api/vacation/edit-vacation`,
    {
      isAdmin,
      description,
      price,
      checkIn,
      checkOut,
      id,
      img,
      destination,
    },
   
  );

  return data;
};

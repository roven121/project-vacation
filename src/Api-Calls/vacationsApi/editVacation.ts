import { FormUpdateVacation } from "../../modals/FormUpdateVacation/FormUpdateVacation.modal";
import instance from "../gateway";
export interface EditVacation {
  isAdmin: boolean,
  Description: string,
  Price: number,
  CheckIn: any,
  CheckOut: any,
  id: number,
  jwt: string,
  Img: string,
  Destination: string
}
export const editVacation = async (
  isAdmin: boolean,
  Description: string,
  Price: number,
  CheckIn: any,
  CheckOut: any,
  id: number,
  jwt: string,
  Img: string,
  Destination: string
) => {
  const data = await instance.put<FormUpdateVacation>(
    `/api/vacation/edit-vacation`,
    {
      isAdmin,
      Description,
      Price,
      CheckIn,
      CheckOut,
      id,
      Img,
      Destination,
    },
   
  );

  return data;
};

import instance from "../gateway";
import { CreateNewVacation } from "../../modals/VacationsModals/CreateNewVacation.modal";
import { getItemLocalStorage } from "../../LocalStoragFuncation/getItemLocalStorage";

export const createNewVacation = async (
  isAdministrator: boolean | number,
  jwt: string,
  Description: string,
  CheckIn: string,
  CheckOut: string,
  Price: number,
  Img: string,
  Destination: string
) => {
  try {
    const token = getItemLocalStorage("jwt");
   
    const data = await instance.post<CreateNewVacation>(
      `/api/vacation/create-new-vacation`,
      {
        isAdministrator,
        Description,
        CheckIn,
        CheckOut,
        Price,
        Img,
        Destination,
      },
      { headers: { Authorization: "Bearer " + token } }
    );

    return data;
  } catch (er) {

  }
};

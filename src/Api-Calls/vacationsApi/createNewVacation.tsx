import instance from "../gateway";
import { CreateNewVacation } from "../../modals/VacationsModals/CreateNewVacation.modal";
import { getItemLocalStorage } from "../../LocalStoragFuncation/getItemLocalStorage";

export const createNewVacation = async (
  isAdministrator: boolean | number,
  jwt: string,
  description: string,
  checkIn: string,
  checkOut: string,
  price: number,
  img: string,
  destination: string
) => {
  try {
    const token = getItemLocalStorage("jwt");
   
    const data = await instance.post<CreateNewVacation>(
      `/api/vacation/create-new-vacation`,
      {
        isAdministrator,
        description,
        checkIn,
        checkOut,
        price,
        img,
        destination,
      },
      { headers: { Authorization: "Bearer " + token } }
    );

    return data;
  } catch (er) {

  }
};

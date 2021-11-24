import instance from "../gateway";

export const deleteUserNameFavoriteVacation = async (
  idVacation: number,
  userName: string
) => {
 

  const data = await instance.delete(`api/vacation/delete-favorite-vacation`, {
    data: { idVacation, userName },
 
  });
 
  return data;
};

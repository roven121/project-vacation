import instance from "../gateway";

export const deleteVacation = async (id: number, jwt: string) => {
  try {
    const data = await instance.delete<any>(
      `/api/vacation/delete-vacation/${id}`,
    
    );
  

    return data;
  } catch (er) {

  }
};

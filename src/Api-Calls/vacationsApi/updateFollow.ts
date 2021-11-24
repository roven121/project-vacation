import instance from "../gateway";

export const updateFollow = async (Id: number, follow: number) => {
  try {
    const data = await instance.post<any>(
      `/api/vacation/set-new-follow`,
      {
        Id,
        follow,
      },
     
    );

    return data;
  } catch (er) {
    alert(er);
  }
};

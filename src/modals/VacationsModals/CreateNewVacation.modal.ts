export interface CreateNewVacation {
  isAdministrator: boolean;
    jwt: string;
    Description: string;
    CheckIn: string;
    CheckOut: string;
    Price: number;
    Img: string;
    Destination:string
  }
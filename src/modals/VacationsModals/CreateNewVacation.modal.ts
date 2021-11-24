export interface CreateNewVacation {
  isAdministrator: boolean;
    jwt: string;
    description: string;
    checkIn: string;
    checkOut: string;
    price: number;
    img: string;
    destination:string
  }
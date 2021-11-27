import React from "react";

import { DataLogin } from "../../modals/LoginModal/DataLogin.modal";
import { RegisterConfig } from "../../modals/RegisterModal/RegisterConfig";
import { CreateNewVacation } from "../../modals/VacationsModals/CreateNewVacation.modal";
import { FetchVacation } from "../../modals/VacationsModals/FetchVacation.modal";

export interface AppState {
  userData: DataLogin | null;
  RegisterConfig: RegisterConfig | null;
  fetchVacations: FetchVacation[];
  createNewVacation: CreateNewVacation | null;
  handelAlertError: string | null;
  addNewVacationBtn: null | boolean;
  removeVacationBtn: null | boolean;

}

interface Context {
  appState: AppState;
  setAppState: (state: Partial<AppState>) => any;
}

export const StateContext = React.createContext<Context>({
  appState: {} as any,
  setAppState: (appState: any) => null,
});

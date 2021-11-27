import * as React from "react";
import Alert from "@mui/material/Alert";

import { StateContext } from "../Context/StateContext";

export const HandelAlertError = () => {
  const { appState, setAppState } = React.useContext(StateContext);
  const { handelAlertError } = appState;
  React.useEffect(() => {
    setTimeout(() => {
      setAppState({ ...appState, handelAlertError: null });
    }, 3000);
  }, [handelAlertError]);
  return (
   
      <Alert  severity="error">
        {handelAlertError}
      </Alert>
  
  );
};

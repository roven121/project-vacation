import { RegisterConfig } from "./../../Api-Calls/modals/RegisterConfig";

export const validatorForm = (detailsUser: RegisterConfig) => {
  console.log(detailsUser);

  const usernameRegex =
    /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
  const firstNameRegex =
    /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
  const lastNameRegex =
    /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
  const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;

  const { userName, firstName, lastName, password } = detailsUser;
  if (!usernameRegex.test(userName)) {
    handelError("userName must contain only Letters ");

    return false;
  }
  if (!firstNameRegex.test(firstName!)) {
    handelError("firstName must contain only Letters ");
    return false;
  }
  if (!lastNameRegex.test(lastName!)) {
    handelError("lastName must contain only Letters ");
    return false;
  }
  if (!passwordRegex.test(password)) {
    handelError("password must be over 8 digit ");
    return false;
  } else {
    return true;
  }
};

const handelError = (msg: string) => {
  alert(msg);
};

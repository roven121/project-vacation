

// export const validatorForm = (detailsUser: RegisterConfig) => {
//   const usernameRegex =
//     /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
//   const firstNameRegex =
//     /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
//   const lastNameRegex =
//     /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
//   const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;

//   const { userName, firstName, lastName, password } = detailsUser;
//   if (!usernameRegex.test(userName)) {
//     const message = "userName must contain only Letters ";
//     return { false: message };
//   }
//   if (!firstNameRegex.test(firstName!)) {
//     const message = "firstName must contain only Letters ";
//     return { false: message };
//   }
//   if (!lastNameRegex.test(lastName!)) {
//     const message = "lastName must contain only Letters ";
//     return { false: message };
//   }
//   if (!passwordRegex.test(password)) {
//     return "password must be over 8 digit ";
//   } else {
//     return true;
//   }
// };
export const validatorForm = () => {
  const usernameRegex =
    /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
  const firstNameRegex =
    /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
  const lastNameRegex =
    /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
  const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;

  return { usernameRegex, firstNameRegex, lastNameRegex, passwordRegex };
};

import { omit } from "lodash";
import { useState } from "react";


export interface TextField {
  Destination: string;
  Description: string;
  Img: string;
}
export const useValidateError = () => {
  const [errors, setErrors] = useState<Partial<TextField>>({});

  
  const imgRegex = /https?:\/\/.*\.(?:png|jpg|img)/;
  const onlyLettersRegex =
    /^[A-Za-z \p{Han}\p{Katakana}\p{Hiragana}\p{Hangul}-]*$/;
  const validate = (name: string, value: string) => {

   
    switch (name) {
      case "Destination":
        if ( !onlyLettersRegex.test(value) ||value.trim().length === 0) {
          setErrors({
            ...errors,
            Destination: "Destination must Private ",
          });
        } else {
          let newObj = omit(errors, "Destination");
          setErrors(newObj);
        }
        break;

      case "Description":
        if (value.trim().length === 0|| !onlyLettersRegex.test(value)) {
          setErrors({
            ...errors,
            Description: "Description must Private ",
          });
        } else {
          let newObj = omit(errors, "Description");
          setErrors(newObj);
        }

        break;
      case "Img":
        if (!imgRegex.test(value)) {
          setErrors({
            ...errors,
            Img: "url Img must contains  .png .jpg .img",
          });
        } else {
          let newObj = omit(errors, "Img");
          setErrors(newObj);
        }

        break;

      default:
        break;
    }
    return;
  };

  return { validate, errors };
};

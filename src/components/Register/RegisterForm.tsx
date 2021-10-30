import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { RegisterConfig } from "../../Api-Calls/modals/RegisterConfig";
import { registerUser } from "../../Api-Calls/register";
import { validatorForm } from "./valaitor";

export const RegisterForm = () => {
  const detailsUser: RegisterConfig = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
  };
  const [user, setUser] = useState(detailsUser);

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
 
    const validated = validatorForm(user);
    console.log(validated);

    try {
      const sendUserDetails = await registerUser(user);
      console.log(sendUserDetails);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={(e) => handelSubmit(e)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name </Form.Label>
        <Form.Control
          name="userName"
          type="text"
          value={user.userName}
          onChange={(e) => handelChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name </Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          value={user.firstName}
          onChange={(e) => handelChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name </Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={(e) => handelChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password </Form.Label>
        <Form.Control
          name="password"
          type="text"
          value={user.password}
          onChange={(e) => handelChange(e)}
        />
        <Button type="submit" variant="outline-danger">
          Register
        </Button>
      </Form.Group>
    </Form>
  );
};
// export interface StetRegister {
//     Register: {
//         UserName: string,
//         firstName: string,
//         lastName: string,
//         password: string,
//     }[];
// }

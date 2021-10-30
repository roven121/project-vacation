import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { LoginUser } from "../../Api-Calls/login";
import Spinner from "react-bootstrap/Spinner";
import { RegisterConfig } from "../../Api-Calls/modals/RegisterConfig";
import { validatorForm } from "../Register/valaitor";
import { Link, useHistory } from "react-router-dom";
import { JwtContext } from "../Context/JwtContext";
import { RenderVacationsCard } from "../VacationsCard/RenderVacationsCard";

export const LoginForm: React.FC = () => {
  const detailsUser: RegisterConfig = {
    userName: "",

    password: "",
  };

  const [user, setUser] = useState(detailsUser);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState("");
  const { Jwt, setJwt } = useContext(JwtContext);

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ user });

    try {
      const validation = validatorForm(user);
      console.log(user);
      if (validation) {
        const results = await LoginUser(user.userName, user.password);

        console.log(results.data);
        const { jwt, userName, isAdministrator } = results.data;
        console.log(isAdministrator, jwt, userName);
        console.log(isAdministrator);

        setAuth(jwt);
        setJwt(jwt);
        // setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {!auth ? (
        <Form onSubmit={(e) => handelSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Enter User Name"
              onChange={(e) => handelChange(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => handelChange(e)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <span>
            <Link to="/register-page">register</Link>
          </span>
        </Form>
      ) : (
        <HomeButton />
      )}
    </div>
  );
};

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/vacations");
  }
  handleClick();
  return <></>;
}

import { useState } from "react";

import { useHistory } from "react-router-dom";

import { registerUser } from "../../Api-Calls/register";

import { useForm, User } from "../Hook/useForm";

import { Paper, Grid, Avatar, Button, TextField } from "@material-ui/core";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
export const RegisterForm = () => {
  const { errors, values, handelChange } = useForm();
  const paperStyle = {
    padding: 20,
    width: "18rem",
    margin: "20px auto",
    height: "32rem",
    background: "#aee0ff",
  };
  const btnStyle = { margin: "8px 0" };
  const avatarStyle = { display: "inline-flex", backgroundColor: "blue" };

  const [handelError, handelErrorSet] = useState<Partial<User>>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  let history = useHistory();
  const redirect = () => {
    history.push("/login-page");
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (
        Object.keys(errors).length === 0 &&
        Object.keys(values).length !== 0
      ) {
        handelErrorSet(errors);

        await registerUser(values);

        redirect();
      } else {
        handelErrorSet(errors);
      }
    } catch (error) {
   
    }
  };
  const { firstName, lastName, password, userName } = handelError;


  return (
    <form onSubmit={handelSubmit}>
      <Grid className="text-center">
        <Paper elevation={8} style={paperStyle}>
          <Grid className="text-center">
            <Avatar style={avatarStyle}>
              <AccountBoxOutlinedIcon />{" "}
            </Avatar>
            <h2>Sign Up </h2>
          </Grid>

          <TextField
            id="standard-basic"
            label={"Enter User Name"}
            variant="standard"
            name="userName"
            type="text"
            onChange={handelChange}
            error={userName ? true : false}
            helperText={userName ? `${userName}` : false}
          />

          <TextField
            id="standard-basic"
            label="Enter First Name"
            variant="standard"
            name="firstName"
            type="text"
            onChange={handelChange}
            error={firstName ? true : false}
            helperText={firstName ? `${firstName}` : false}
          />
          <TextField
            id="standard-basic"
            label={"Enter last Name"}
            variant="standard"
            name="lastName"
            type="text"
            onChange={handelChange}
            error={lastName ? true : false}
            helperText={lastName ? `${lastName}` : false}
          />

          <TextField
            id="standard-basic"
            label="password"
            variant="standard"
            name="password"
            type="password"
            onChange={handelChange}
            error={password ? true : false}
            helperText={password ? `${password}` : false}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Creat my Account
          </Button>
        </Paper>
      </Grid>
    </form>
  );
};

import React, { useContext } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { editVacation } from "../../Api-Calls/vacationsApi/editVacation";
import { BtnModalShow } from "../Context/BtnModalShow";
import { StateContext } from "../Context/StateContext";
import { convertWithMoment } from "../../handelDateTimeToString";

import { useValidateError } from "../Hook/useValidateError";
import { FormUpdateVacation } from "../../modals/FormUpdateVacation/FormUpdateVacation.modal";
import EditIcon from "@mui/icons-material/Edit";
export const EditVacationByForm = ({
  id,
  Description,
  Price,
  Destination,
  Img,
}: any) => {
  const detailFormUpdate: FormUpdateVacation = {
    Destination,
    Description,
    CheckIn: new Date(),
    CheckOut: new Date(),
    Price,
    Img,
  };


  const [values, setValues] = useState(detailFormUpdate);
  const { errors, validate } = useValidateError();

  const { appState } = useContext(StateContext);
  const { userData } = appState;

  const { handleClose } = useContext(BtnModalShow);
  const paperStyle = {
    padding: 20,
    height: "30rem",
    width: "40rem",
    margin: "20px auto",
  };
  const btnStyle = { margin: "8px 0" };
  const avatarStyle = { display: "inline-flex", backgroundColor: "blue" };
  const initialDate = new Date();

  const initialDateFromTheNextDay: any = initialDate.setDate(
    initialDate.getDate() + 1
  );
  const handelChange = (event: any): any => {
    const { name, value } = event.target;

    validate(name, value);

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      userData &&
      Object.keys(errors).length === 0 &&
      Object.keys(values).length !== 0
    ) {
      const { isAdministrator, jwt } = userData;
      const { Img, CheckIn, CheckOut, Description, Destination, Price } =
        values;

      const startDateFormat = convertWithMoment(CheckIn);
      const endDateFormat = convertWithMoment(CheckOut);

      if (isAdministrator && jwt) {
        await editVacation(
          isAdministrator,
          Description,
          Price,
          startDateFormat,
          endDateFormat,
          id,
          jwt,
          Img,
          Destination
        );
        handleClose();
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="text-center"
            spacing={2}
          >
            <Paper elevation={8} style={paperStyle}>
              <Grid className="text-center">
                <Avatar style={avatarStyle}>
                  <EditIcon />
                </Avatar>
                <h2>Edit Vacation </h2>
              </Grid>
              <Grid item xs={2} md={4}>
                <TextField
                  required
                  label={"Enter Destination"}
                  name="Destination"
                  type="text"
                  placeholder="Destination"
                  onChange={(e) => handelChange(e)}
                  variant="standard"
                  value={values.Destination}
                  error={errors.Destination ? true : false}
                  helperText={errors.Destination ? `${errors.Destination}` : false}
                />
              </Grid>
              <Grid item xs={2} md={4}>
                <TextField
                  required
                  type="text"
                  label={"Enter Description"}
                  name="Description"
                  variant="standard"
                  value={values.Description}
                  onChange={handelChange}
                  error={errors.Description ? true : false}
                  helperText={errors.Description ? `${errors.Description}` : false}
                />
              </Grid>
              <Grid item xs={2} md={4}>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  name="startDate"
                  minDate={new Date()}
                  selected={values.CheckIn}
                  onChange={(date: Date) =>
                    setValues({ ...values, CheckIn: date })
                  }
                />

                <DatePicker
                  name="endDate"
                  minDate={initialDateFromTheNextDay}
                  selected={values.CheckOut}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date: Date) =>
                    setValues({ ...values, CheckOut: date })
                  }
                />
              </Grid>
              <TextField
                required
                name="Price"
                label={"Insert Price"}
                type="number"
                placeholder="Price"
                variant="standard"
                value={values.Price}
                onChange={handelChange}
              />

              <TextField
                name="Img"
                type="text"
              
                onChange={handelChange}
                label={"Pick a Picture"}
                variant="standard"
                value={values.Img}
                error={errors.Img ? true : false}
                  helperText={errors.Img ? `${errors.Img}` : false}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnStyle}
                fullWidth
              >
                Submit
              </Button>
            </Paper>
          </Grid>
        </form>
      </div>
    </div>
  );
};

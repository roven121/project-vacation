/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPencil } from "react-icons/im";
import { Vacation } from "../../Api-Calls/vacationsApi/fetchVacation.modal";
import { getAllVacation } from "../../Api-Calls/vacationsApi/fetchVacations";
import moment from "moment";
export const RenderVacationsCard = () => {
  const detailsVacations: Vacation = {
    id: 0,
    Description: "",
    Price: 0,
    CheckIn: "",
    CheckOut: "",
    Follow: 0,
  };

  //this use state only in admin state !!!
  const [checkAdmin, setCheckAdmin] = useState(true);
  const [vacationsResult, setVacationsResult] = useState([]);
  useEffect(() => {
    const fetchVacations = async () => {
      const data = await getAllVacation();
      const results = data.data;
      setVacationsResult(results);
      console.log(results);
    };
    fetchVacations();
  }, [""]);
  return (
    <div>
      {vacationsResult &&
        vacationsResult.map(
          ({ Description, CheckIn, CheckOut, Follow, Price, id }) => (
            <Card style={{ width: "14rem" }}>
              {checkAdmin && <OnlyForAdmin />}
              <Card.Img
                variant="top"
                src="https://ychef.files.bbci.co.uk/1600x900/p08rhwsy.webp"
              />
              <Card.Body>
                <Card.Title>Venice</Card.Title>
                <Card.Text>descriptionL: {Description}</Card.Text>
                <Card.Text>Price: {Price} </Card.Text>
                <Card.Text>
                  Date: {moment(CheckIn).format(' DD/MM/YYYY')} To {moment(CheckOut).format(' DD/MM/YYYY') }
                </Card.Text>
              </Card.Body>
            </Card>
          )
        )}
    </div>
  );
};

const OnlyForAdmin = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <Button onClick={() => console.log(1)} variant="link">
        <ImPencil />
      </Button>
    </div>
  );
};

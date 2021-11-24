import React from "react";
import { EditCardVacation } from "./EditCardVacation";
import { RemoveCardVacation } from "./RemoveCardVacation";
export interface Button {
  checkAdmin: boolean;
  Id: number;
}
export const RenderButtonsOfEditAndRemove = ({
  checkAdmin,
  Description,
  CheckOut,
  CheckIn,
  Price,
  Destination,
  Img,
  Id,
}: any) => {

  
  return (
    <div>
      {checkAdmin ? (
        <div>
          <span>
            <RemoveCardVacation id={Id} />

            <EditCardVacation
              id={Id}
              CheckIn={CheckIn}
              CheckOut={CheckOut}
              Description={Description}
              Price={Price}
              Destination={Destination}
              checkAdmin={checkAdmin}
              Img={Img}
            />
          </span>
        </div>
      ) : null}
    </div>
  );
};

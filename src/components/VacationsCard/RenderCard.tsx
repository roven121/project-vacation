import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { FetchVacation } from "../../modals/VacationsModals/FetchVacation.modal";
import moment from "moment";
import { FowlersBtn } from "../FowlersBtn/FowlersBtn";

import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

import { RenderButtonsOfEditAndRemove } from "../OptionsForAdmin/RenderButtonsOfEditAndRemove";
export const RenderCard: React.FunctionComponent<FetchVacation> = ({
  Description,
  CheckOut,
  Id,
  CheckIn,
  Price,
  Destination,
  Img,
  followId,
  follow,
  isUserName,
  checkAdmin,
}: FetchVacation) => {
  return (
    <Card>
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={`${Destination}`}
        subheader={`start Date: ${moment(CheckIn).format(
          "DD/MM/YYYY"
        )} To: ${moment(CheckOut).format("DD/MM/YYYY")}`}
        avatar={
          <RenderButtonsOfEditAndRemove
            Id={Id}
            CheckIn={CheckIn}
            CheckOut={CheckOut}
            Description={Description}
            Price={Price}
            Destination={Destination}
            checkAdmin={checkAdmin}
            Img={Img}
          />
        }
      />
      <CardMedia
        component="img"
        height="140"
        image={Img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
        <Typography variant="h6" component="div" color="text.secondary">
          Description:{Description}
          {<br />}
        </Typography>
        <Typography color="text">Price:{Price}</Typography>
        <Typography color="text">
          {isUserName && !checkAdmin ? (
            <FowlersBtn
              numberFowlers={follow}
              Id={Id}
              defaultFollow={followId > 0 ? false : true}
            />
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

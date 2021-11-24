import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { FetchVacation } from "../../modals/VacationsModals/FetchVacation.modal";
import moment from "moment";
import { FollowButton } from "../FollowButton/FollowButton";

import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

import { RenderButtonsOfEditAndRemove } from "../OptionsForAdmin/RenderButtonsOfEditAndRemove";
export const RenderCard: React.FunctionComponent<FetchVacation> = ({
  description,
  checkOut,
  id,
  checkIn,
  price,
  destination,
  img,
  followId,
  follow,
  isUserName,
  checkAdmin,
}: FetchVacation) => {
  return (
    <Card>
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={<h2>{destination}</h2>}
        subheader={`Check in: ${moment(checkIn).format(
          "DD/MM/YYYY"
        )} To: ${moment(checkOut).format("DD/MM/YYYY")}`}
        avatar={
          <RenderButtonsOfEditAndRemove
            id={id}
            checkIn={checkIn}
            checkOut={checkOut}
            description={description}
            price={price}
            destination={destination}
            checkAdmin={checkAdmin}
            img={img}
          />
        }
      />
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography variant="body2" color="text.secondary"></Typography>
        <Typography variant="h6" component="div" color="text.secondary">
          description:{description}
          {<br />}
        </Typography>
        <Typography color="text">price:{price}</Typography>
        <Typography color="text">
          {isUserName && !checkAdmin ? (
            <FollowButton
              numberFowlers={follow}
              id={id}
              defaultFollow={followId > 0 ? false : true}
            />
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

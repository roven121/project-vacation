
import { MdEditNote } from "react-icons/md";
import { ModalUpdateVacation } from "../PopModal/Modal";
import { EditVacationByForm } from "../TempleteForm/EditVacationByForm";
export const EditCardVacation = ({
  id,
  
  Description,
  CheckOut,
  CheckIn,
  Price,
  Destination,
  Img,
}: any) => {
  
  
  return (
    <div>
      <ModalUpdateVacation
        symbol={<MdEditNote />}
        comp={
          <EditVacationByForm
            id={id}
            CheckIn={CheckIn}
            CheckOut={CheckOut}
            Description={Description}
            Price={Price}
            Destination={Destination}
            Img={Img}
          />
        }
        text="edit Vacation"
      />
    </div>
  );
};

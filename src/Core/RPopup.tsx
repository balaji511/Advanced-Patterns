import { Dialog } from "@mui/material";
interface IPopup {
  visible: boolean;
  children: any;
}

const RPopup = ({ visible, children }: IPopup) => {
  return (
    <Dialog open={visible} maxWidth={"lg"}>
      {children}
    </Dialog>
  );
};

export default RPopup;

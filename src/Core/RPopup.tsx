import { Dialog } from "@mui/material";
interface IPopup {
  visible: boolean;
  children: any;
  parentClass: string;
}

const RPopup = ({ visible, children, parentClass }: IPopup) => {
  return (
    <Dialog open={visible} maxWidth={"lg"} className={parentClass}>
      {children}
    </Dialog>
  );
};

export default RPopup;

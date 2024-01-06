import { Button } from "@mui/material";

interface IRButton {
  title: string;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const RButton = ({
  variant = "contained",
  title,
  color = "primary",
  clickHandler,
}: IRButton) => {
  return (
    <Button
      variant={variant}
      fullWidth
      focusRipple
      size="large"
      color={color}
      onClick={clickHandler}
      sx={{ width: "100%" }}
    >
      {title}
    </Button>
  );
};

export default RButton;

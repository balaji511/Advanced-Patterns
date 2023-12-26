import { FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

interface IRInputField {
  title: string;
  value: string;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  type?: React.InputHTMLAttributes<unknown>["type"];
  errorValue: boolean;
}

const RInputField = ({
  title,
  value,
  changeHandler,
  required = true,
  type = "text",
  errorValue = true,
}: IRInputField) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 2,
      }}
    >
      <Typography
        fontWeight={errorValue ? 600 : 500}
        color={errorValue ? "red" : ""}
        mb={0.5}
        mt={1.5}
      >
        {title} {required && "*"}
      </Typography>
      <TextField
        variant="outlined"
        color={errorValue ? "error" : "primary"}
        fullWidth
        value={value}
        onChange={changeHandler}
        type={type}
        required={required}
        focused={errorValue}
        size="small"
      />
      <Stack
        display={errorValue ? "flex" : "none"}
        direction={"row"}
        alignItems={"center"}
        sx={{ gap: 1, color: "red" }}
      >
        <ErrorIcon />
        <Typography>{title} is Mandatory Field</Typography>
      </Stack>
    </div>
  );
};

export default RInputField;

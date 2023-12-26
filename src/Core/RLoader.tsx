import { CircularProgress } from "@mui/material";

const RLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={32} color="primary" />
    </div>
  );
};

export default RLoader;

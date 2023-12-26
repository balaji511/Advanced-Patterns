import { Card, styled } from "@mui/material";

export const StyledLoginCard = styled(Card)(({ theme }) => {
  return {
    width: "35dvw",
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
  };
});

export const StyledDateTimeCard = styled(Card)(({ theme }) => {
  return {
    alignSelf: "flex-end",
    position: "absolute",
    top: 0,
    marginTop: 12,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
    },
  };
});

import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import RInputField from "../../Core/RInputField";
import RButton from "../../Core/RButton";
import { StyledDateTimeCard, StyledLoginCard } from "./LoginComponents";
import { useContext, useEffect, useState } from "react";
import { IDateTime, ILoginInformation } from "./Login.types";
import { getDateAndTime } from "../../Utils/DateTime.method";
import {
  IMobileContextType,
  MobileDisplayContext,
} from "../../Store/Context/MobileDisplayContext";

const Login = () => {
  const [userLoginInformation, setUserLoginInformation] =
    useState<ILoginInformation>({
      username: "",
      password: "",
    });
  const [dateTimeObject, setDateTimeObject] = useState<IDateTime>({
    date: "",
    time: "",
  });
  const { isMobile } = useContext<IMobileContextType>(MobileDisplayContext);

  useEffect(() => {
    const interval = setInterval(() => {
      const res = getDateAndTime();
      setDateTimeObject(res);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dateTimeObject.time]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledDateTimeCard elevation={5}>
        <Stack direction={"row"} gap={2}>
          <Typography fontWeight={600}>Date :</Typography>
          <Typography>{dateTimeObject.date}</Typography>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Typography fontWeight={600}>Time :</Typography>
          <Typography> {dateTimeObject.time}</Typography>
        </Stack>
      </StyledDateTimeCard>
      <StyledLoginCard
        elevation={5}
        sx={{
          width: "30dvw",
        }}
      >
        <CardContent>
          <Stack direction={"row"} justifyContent={"center"}>
            <Typography variant="h5" fontWeight={"bold"} color={"orange"}>
              Covid19
            </Typography>
            <Typography variant="h5" fontWeight={"bold"} color={"green"}>
              India
            </Typography>
          </Stack>
          <RInputField
            title="User Name"
            changeHandler={() => {}}
            value=""
            required={true}
            errorValue={true}
          />
          <RInputField
            title="Password"
            changeHandler={() => {}}
            value=""
            required={true}
            type="password"
            errorValue={true}
          />
          <Stack direction={"row"} marginBlock={2} gap={2}>
            <RButton title={"Login"} clickHandler={() => {}} />
            <RButton
              title={"Singup"}
              variant="outlined"
              clickHandler={() => {}}
            />
          </Stack>
        </CardContent>
      </StyledLoginCard>
    </Container>
  );
};

export default Login;

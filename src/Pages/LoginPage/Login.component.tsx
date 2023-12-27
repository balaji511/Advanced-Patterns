import { CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import RInputField from "../../Core/RInputField";
import RButton from "../../Core/RButton";
import { StyledDateTimeCard, StyledLoginCard } from "./Login.core";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { IDateTime, ILoginInformation, IUserError } from "./Login.types";
import { getDateAndTime } from "../../Utils/DateTime.method";
import RLoader from "../../Core/RLoader";
import RPopup from "../../Core/RPopup";
import {
  IMobileContextType,
  MobileDisplayContext,
} from "../../Store/Context/MobileDisplayContext";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DateRangeIcon from "@mui/icons-material/DateRange";
import "./Login.css";

const initialErrorState: IUserError = {
  usernameError: false,
  passwordError: false,
};

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
  const [errorFields, setErrorFields] = useState<IUserError>(initialErrorState);
  const { isMobile } = useContext<IMobileContextType>(MobileDisplayContext);
  const [registerPopup, setRegisterPopup] = useState<boolean>(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setUserLoginInformation((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const res = getDateAndTime();
      setDateTimeObject(res);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dateTimeObject.time]);

  useEffect(() => {
    setErrorFields((p) => ({ ...p, usernameError: false }));
  }, [userLoginInformation.username]);
  useEffect(() => {
    setErrorFields((p) => ({ ...p, passwordError: false }));
  }, [userLoginInformation.password]);

  const handleLoginEvent = () => {
    if (userLoginInformation.username.length === 0) {
      setErrorFields((p) => ({ ...p, usernameError: true }));
    }
    if (userLoginInformation.password.length === 0) {
      setErrorFields((p) => ({ ...p, passwordError: true }));
    }
  };

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
        {!dateTimeObject.date ? (
          <RLoader />
        ) : (
          <>
            <Stack direction={"row"} gap={1} mt={1}>
              <DateRangeIcon />
              <Typography fontWeight={600}>Date :</Typography>
              <Typography>{dateTimeObject.date}</Typography>
            </Stack>
            <Stack direction={"row"} gap={1} mt={1}>
              <AccessTimeFilledIcon />
              <Typography fontWeight={600}>Time :</Typography>
              <Typography> {dateTimeObject.time}</Typography>
            </Stack>
          </>
        )}
      </StyledDateTimeCard>
      <StyledLoginCard elevation={5}>
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
            changeHandler={(e) => handleInputChange(e, "username")}
            value={userLoginInformation.username}
            required={true}
            errorValue={errorFields.usernameError}
          />
          <RInputField
            title="Password"
            changeHandler={(e) => handleInputChange(e, "password")}
            value={userLoginInformation.password}
            required={true}
            type="password"
            errorValue={errorFields.passwordError}
          />
          <Stack direction={"row"} marginBlock={2} gap={2}>
            <RButton title={"Login"} clickHandler={handleLoginEvent} />
            <RButton
              title={"Singup"}
              variant="outlined"
              clickHandler={() => setRegisterPopup(true)}
            />
          </Stack>
        </CardContent>
      </StyledLoginCard>
      <RPopup visible={registerPopup} parentClass="register-popup">
        <Grid container sx={{ width: isMobile ? "80vw" : "50vw", padding: 2 }}>
          <Grid item xs={12}>
            <Typography fontWeight={"bold"}>Register User</Typography>
            <RInputField
              title={"User Name"}
              value={""}
              changeHandler={() => {}}
              required={true}
              errorValue={false}
            />
          </Grid>
        </Grid>
      </RPopup>
    </Container>
  );
};

export default Login;

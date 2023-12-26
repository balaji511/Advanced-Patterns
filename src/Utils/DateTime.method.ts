import moment from "moment";
import { IDateTime } from "../Pages/LoginPage/Login.types";

export function getDateAndTime(): IDateTime {
  const todaysDate = moment(new Date()).format("DD-MMM-YYYY");
  const renderWithZero = (val: any) => {
    if (String(val).length === 1) {
      return "0" + val;
    } else return val;
  };
  const getLocalTime = (val: any) => {
    if (Number(val) > 12) {
      return "PM";
    } else {
      return "AM";
    }
  };
  const time =
    renderWithZero(new Date().getHours()) +
    ":" +
    renderWithZero(new Date().getMinutes()) +
    ":" +
    renderWithZero(new Date().getSeconds()) +
    " " +
    getLocalTime(new Date().getHours());
  return { date: todaysDate, time: time };
}

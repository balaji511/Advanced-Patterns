import { IDateTime } from "../Pages/LoginPage/Login.types";

export function getDateAndTime(): IDateTime {
  const todaysDate = new Date().toLocaleDateString();
  const renderWithZero = (val: any) => {
    if (String(val).length === 1) {
      return "0" + val;
    } else return val;
  };
  const time =
    renderWithZero(new Date().getHours()) +
    ":" +
    renderWithZero(new Date().getMinutes()) +
    ":" +
    renderWithZero(new Date().getSeconds());
  return { date: todaysDate, time: time };
}

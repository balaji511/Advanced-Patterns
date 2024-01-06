function getLastDayOfMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

interface MonthLastDates {
  [key: string]: number;
}

export const monthLastDates: MonthLastDates[] = [];

// Assuming you want to get last dates for the year 2023 (you can change the year as needed)
const year = 2023;

// Array of month names
export const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const weekNames: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Populate the object with month names and their corresponding last dates
monthNames.forEach((_monthName: any, index: any) => {
  monthLastDates.push({
    monthName: _monthName,
    lastDay: getLastDayOfMonth(year, index),
  });
});

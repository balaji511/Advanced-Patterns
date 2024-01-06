export interface DayInfo {
  date: string;
  week: number; // 0 (Sunday) to 6 (Saturday)
  day: number;
}

function generateMonthDays(year: number, month: number): DayInfo[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthDays: DayInfo[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayInfo: DayInfo = {
      date: date.toISOString().split("T")[0],
      week: date.getDay(),
      day: day,
    };
    monthDays.push(dayInfo);
  }

  return monthDays;
}

function generateYearMonthsDays(year: number): {
  [monthName: string]: DayInfo[];
} {
  const allMonthsDays: { [monthName: string]: DayInfo[] } = {};

  for (let month = 0; month < 12; month++) {
    const monthName = new Date(year, month, 1).toLocaleString("en-US", {
      month: "long",
    });
    allMonthsDays[monthName] = generateMonthDays(year, month);
  }

  return allMonthsDays;
}

// Assuming you want to generate days for the year 2023 (you can change the year as needed)
const year: number = 2023;

export const allMonthsDays = generateYearMonthsDays(year);

// Display the result
console.log(allMonthsDays);

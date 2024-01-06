import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { DayInfo, allMonthsDays } from "../Utils/DatesOfCurrentMonth";
import { monthNames, weekNames } from "../Utils/DatesWithMonth";
import RButton from "./RButton";
import { useEffect, useState } from "react";
interface apptT {
  date: string;
  title: string;
  type: string;
}

const days = allMonthsDays;
const appt: apptT[] = [
  {
    date: "2023-01-11",
    title: "Demo meeting",
    type: "completed",
  },
  {
    date: "2023-01-18",
    title: "Demo meeting",
    type: "upcoming",
  },
  {
    date: "2023-01-11",
    title: "Demo meeting",
    type: "tenative",
  },
  {
    date: "2023-01-19",
    title: "Demo meeting",
    type: "upcoming",
  },
  {
    date: "2023-01-10",
    title: "Demo meeting",
    type: "cancelled",
  },
];

const RCustomCalender = () => {
  const [appts, setappts] = useState(appt);
  function addEvent(date: string): void {
    setappts((p) => [
      ...p,
      {
        date: date,
        title: "Demo meeting",
        type: "completed",
      },
    ]);
  }
  const checkCurrentDate = (date: string): any => {
    if (
      date.split("-")[2] ===
      new Date().toISOString().split("T")[0].split("-")[2]
    ) {
      return "contained";
    }
    return "outlined";
  };
  const eventsOfTheDay = (date: string) => {
    let c: apptT[] = [];
    appts.map((eachAppt: apptT) => {
      if (eachAppt.date.split("-")[2] === date.split("T")[0].split("-")[2]) {
        c.push(eachAppt);
      }
    });
    return c;
  };
  const checkForType = (type: string) => {
    switch (type) {
      case "upcoming":
        return "primary";
      case "cancelled":
        return "warning";
      case "completed":
        return "success";
    }
  };

  const renderEmptyGrids = (count: number) => {
    for (let c = 0; c <= count; c++) {
      return <Grid xs={12} md={1.7}></Grid>;
    }
  };

  return (
    <Grid container>
      {weekNames &&
        weekNames.map((e) => (
          <Grid item bgcolor={"white"} p={2} xs={12} md={1.7} key={e}>
            {e}
          </Grid>
        ))}
      {renderEmptyGrids(allMonthsDays.January[0].week)}
      {days &&
        days.January &&
        days[monthNames[0]].map((eachDay: DayInfo) => (
          <>
            <Grid
              item
              bgcolor={"white"}
              p={2}
              xs={12}
              md={1.7}
              style={{
                height: "30vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              key={eachDay.date}
            >
              <Card
                sx={{ width: "100%", bgcolor: "whitesmoke", height: "100%" }}
                elevation={0}
              >
                <CardContent>
                  {eventsOfTheDay(eachDay.date)
                    .slice(0, 2)
                    .map((each) => (
                      <Button
                        key={each.title}
                        color={checkForType(each.type)}
                        variant="contained"
                        sx={{
                          padding: 0.5,
                          margin: 0.2,
                          color: "white",
                          width: "100%",
                        }}
                      >
                        {each.title}
                      </Button>
                    ))}
                  {eventsOfTheDay(eachDay.date).length > 2 && (
                    <RButton
                      title="show more"
                      variant="text"
                      clickHandler={() => {}}
                    />
                  )}
                </CardContent>
              </Card>
              <RButton
                variant={checkCurrentDate(eachDay.date)}
                title={eachDay.day.toString()}
                clickHandler={() => addEvent(eachDay.date)}
              />
            </Grid>
          </>
        ))}
    </Grid>
  );
};

export default RCustomCalender;

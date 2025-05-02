import { Link } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";

import { Spin } from "@gravity-ui/uikit";

import { activitiesService } from "../../../services/activities";

import { useQuery } from "@tanstack/react-query";

import YearsSpinner from "../../../components/YearsSpinner";
import MonthesSpinner from "../../../components/MonthesSpinner";
import ActivitiesCalendar from "../../../components/ActivitiesCalendar";
import ActivityAnnounce from "./ActivityAnnounce";

import "./index.css";

const CURRENT_DATE = new Date();
const LIMIT = 3;
const requestFunction = () =>
  activitiesService.getActivities({
    limit: LIMIT,
    dateFrom: CURRENT_DATE.toISOString(),
    sort: {
      column: "date",
      dir: "asc",
    },
  });

const ActivitiesCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(CURRENT_DATE);

  const calendarYear = useMemo(
    () => selectedDate.getFullYear(),
    [selectedDate],
  );
  const calendarMonth = useMemo(() => selectedDate.getMonth(), [selectedDate]);
  console.log("селектед", calendarYear, calendarMonth, selectedDate);

  const handleDecreaseMonth = useCallback(() => {
    setSelectedDate((prevDate) => {
      const nextDate = new Date(prevDate.setMonth(prevDate.getMonth() - 1));
      console.log("nextDate", nextDate);
      return nextDate;
    });
  }, [setSelectedDate]);

  const handleIncreaseMonth = useCallback(() => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() + 1)),
    );
  }, [setSelectedDate]);

  const handleDecreaseYear = useCallback(() => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setFullYear(prevDate.getFullYear() - 1)),
    );
  }, [setSelectedDate]);
  const handleIncreaseYear = useCallback(() => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setFullYear(prevDate.getFullYear() + 1)),
    );
  }, [setSelectedDate]);

  const { data: rawActivities, isLoading } = useQuery({
    queryKey: ["activities", "closestActivities"],
    queryFn: requestFunction,
  });

  const closestActivities = useMemo(
    () => rawActivities?.data || [],
    [rawActivities],
  );

  return (
    <section className="calendar-section">
      <h1 className="calendar-section__header">Мероприятия</h1>
      <h2 className="calendar-section__closest-activities-header">
        Ближайшие мероприятия
      </h2>
      {isLoading || !closestActivities ? (
        <Spin />
      ) : (
        <ul className="calendar-section__closest-activities-list">
          {closestActivities.map((activityItem) => (
            <ActivityAnnounce key={activityItem.id} {...activityItem} />
          ))}
        </ul>
      )}
      <div className="calendar-section__calendar-container">
        <YearsSpinner
          startValue={calendarYear}
          onIncrease={handleIncreaseYear}
          onDecrease={handleDecreaseYear}
          className="calendar-section__spinner"
        />

        <MonthesSpinner
          startValue={calendarMonth}
          onDecrease={handleDecreaseMonth}
          onIncrease={handleIncreaseMonth}
          className="calendar-section__spinner"
        />
        <ActivitiesCalendar
          selectedDate={selectedDate}
          currentDate={CURRENT_DATE}
          className="calendar-section__calendar"
        />
      </div>
    </section>
  );
};

export default ActivitiesCalendarPage;

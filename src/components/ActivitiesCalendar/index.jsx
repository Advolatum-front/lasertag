import { Link } from "react-router-dom";
import { useMemo } from "react";

import "./index.css";

const DAYS_CAPTIONS_LIST = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const WEEK_LENGTH = DAYS_CAPTIONS_LIST.length;

// TODO: вынести в отдельный компонент

const daysOfWeekItems = DAYS_CAPTIONS_LIST.map((item, index) => {
  return (
    <li className="activities-calendar__day-caption" key={`caption${item}`}>
      {item}
    </li>
  );
});

// TODO: вынести в отдельный компонент

const calendarDayItem = (dayNumber, neighbour = false) => {
  const itemClassName = neighbour
    ? "activities-calendar__calendar-day neighbour-month"
    : "activities-calendar__calendar-day";

  const key = neighbour ? `neighbour${dayNumber}` : `current${dayNumber}`;

  const dayNumberPadded = dayNumber.toString().padStart(2, "0");

  return (
    <li className={itemClassName} key={key}>
      <span className="activities-calendar__day-number">{dayNumberPadded}</span>
    </li>
  );
};

const ActivitiesCalendar = (props) => {
  const { selectedDate, currentDate, className = "" } = props;
  const startCalendarDate = useMemo(() => {
    const startDate = new Date(selectedDate);
    startDate.setDate(1);
    startDate.setDate(2 - startDate.getDay());
    return startDate;
  }, [selectedDate]);

  const endCalendarDate = useMemo(() => {
    const endDate = new Date(selectedDate);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0);
    endDate.setDate(endDate.getDate() + WEEK_LENGTH - endDate.getDay());
    return endDate;
  }, [selectedDate]);

  const dayList = useMemo(() => {

    const arr = [];

    let processedDate = new Date(startCalendarDate);
    while (processedDate <= endCalendarDate) {
      arr.push({
        date: processedDate.getDate(),
        isCurrentMonth: processedDate.getMonth() === selectedDate.getMonth(),
        isCurrentDate: processedDate.getDate() === currentDate.getDate() &&
      });




      processedDate.setDate(processedDate.getDate() + 1);
    };
  }, [])

  // currentMonthDays
  //   .map((el) => mkElem("div", null, null, el))
  //   .forEach((div) => {
  //     calendar.appendChild(div);
  //   });

  /*
структура дня календаря

<li className="activities-calendar__calendar-day [neighbour-month]">
  <span className="activities-calendar__day-number">01</span>
  <span className="activities-calendar__activity-name">
    Тренировочный бой юниоров
  </span>
  <Link to="/" className="activities-calendar__link" />
</li>

    */
  const calendarDaysItems = null;

  const calendarWrapperClassName = className
    ? `activities-calendar-wrapper ${className}`
    : `activities-calendar-wrapper`;

  return (
    <div className={calendarWrapperClassName}>
      <ul className="activities-calendar__calendar">{calendarDaysItems}</ul>
    </div>
  );
};

export default ActivitiesCalendar;

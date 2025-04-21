import { Link } from "react-router-dom";

import "./index.css";

const ActivitiesCalendar = (props) => {
  const { month, year, className = "" } = props;

  const daysOfWeekCaptions = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysOfWeekItems = daysOfWeekCaptions.map((item, index) => {
    return (
      <li className="activities-calendar__day-caption" key={`caption${index}`}>
        {item}
      </li>
    );
  });

  const calendarDayItem = (dayNumber, neighbour = false) => {
    const itemClassName = neighbour
      ? "activities-calendar__calendar-day neighbour-month"
      : "activities-calendar__calendar-day";

    const key = neighbour ? `neighbour${dayNumber}` : `current${dayNumber}`;

    return (
      <li className={itemClassName} key={key}>
        <span className="activities-calendar__day-number">{dayNumber}</span>
        <span className="activities-calendar__activity-name">
          Тренировочный бой юниоров
        </span>
        <Link to="/" className="activities-calendar__link" />
      </li>
    );
  };

  const naturalNumbers = (n) => Array.from({ length: n }).map((_, i) => i + 1);

  const currentMonthLength = new Date(year, month + 1, 0).getDate();

  const previousMonthLastDay = new Date(year, month, 0).getDate();
  let weekDayOfMonthBegin = new Date(year, month, 1).getDay();
  weekDayOfMonthBegin = weekDayOfMonthBegin === 0 ? 7 : weekDayOfMonthBegin;

  let currentMonthDays = naturalNumbers(currentMonthLength);
  const currentMonthDaysItems = currentMonthDays.map((dayNumber) => {
    return calendarDayItem(dayNumber);
  });

  const previousMonthDays = [];

  let day = weekDayOfMonthBegin;
  let lastMonthDay = previousMonthLastDay;
  while (day > 1) {
    previousMonthDays.unshift(lastMonthDay);
    day--;
    lastMonthDay--;
  }

  const previousMonthDaysItems = previousMonthDays.map((dayNumber) => {
    return calendarDayItem(dayNumber, true);
  });

  let weekDayOfMonthEnd = new Date(year, month, currentMonthLength).getDay();

  weekDayOfMonthEnd = weekDayOfMonthEnd === 0 ? 7 : weekDayOfMonthEnd;

  const nextMonthDays = naturalNumbers(7 - weekDayOfMonthEnd);
  const nextMonthDaysItems = nextMonthDays.map((dayNumber) => {
    return calendarDayItem(dayNumber, true);
  });

  const calendarDaysItems = [
    ...daysOfWeekItems,
    ...previousMonthDaysItems,
    ...currentMonthDaysItems,
    ...nextMonthDaysItems,
  ];

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

// <ul className="activities-calendar__days-of-week">{daysOfWeekItems}</ul>

import { Link } from "react-router-dom";

import "./index.css";

const ActivitiesCalendar = (props) => {
  const { month, year, className = "", activities } = props;

  const daysOfWeekCaptions = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysOfWeekItems = daysOfWeekCaptions.map((item, index) => {
    return (
      <li className="activities-calendar__day-caption" key={`caption${index}`}>
        {item}
      </li>
    );
  });

  // Функция для проверки, есть ли мероприятия в указанный день
  const getActivitiesForDay = (day, month, year) => {
    const dayStr = day.toString().padStart(2, "0");
    const monthStr = (month + 1).toString().padStart(2, "0");
    const dateStr = `${dayStr}.${monthStr}.${year}`;

    return activities.find((activity) => activity.date === dateStr);
  };

  const calendarDayItem = (dayNumber, neighbour = false) => {
    const itemClassName = neighbour
      ? "activities-calendar__calendar-day neighbour-month"
      : "activities-calendar__calendar-day";

    const key = neighbour ? `neighbour${dayNumber}` : `current${dayNumber}`;
    const dayNumberPadded = dayNumber.toString().padStart(2, "0");

    // Корректируем месяц и год для соседних месяцев
    let activityMonth = month;
    let activityYear = year;

    if (neighbour === "prev") {
      activityMonth = month - 1;
      if (activityMonth < 0) {
        activityMonth = 11;
        activityYear = year - 1;
      }
    } else if (neighbour === "next") {
      activityMonth = month + 1;
      if (activityMonth > 11) {
        activityMonth = 0;
        activityYear = year + 1;
      }
    }

    // Проверяем, есть ли мероприятие в этот день
    const activity = getActivitiesForDay(
      dayNumber,
      activityMonth,
      activityYear,
    );

    const id = activity?.id;
    const url = `/activities/${id}`;

    if (activity) {
      return (
        <li className={itemClassName} key={key}>
          <span className="activities-calendar__day-number">
            {dayNumberPadded}
          </span>
          <span className="activities-calendar__activity-name">
            {activity.title}
          </span>
          <Link to={url} className="activities-calendar__link" />
        </li>
      );
    }

    return (
      <li className={itemClassName} key={key}>
        <span className="activities-calendar__day-number">
          {dayNumberPadded}
        </span>
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
    return calendarDayItem(dayNumber, "prev");
  });

  let weekDayOfMonthEnd = new Date(year, month, currentMonthLength).getDay();
  weekDayOfMonthEnd = weekDayOfMonthEnd === 0 ? 7 : weekDayOfMonthEnd;

  const nextMonthDays = naturalNumbers(7 - weekDayOfMonthEnd);
  const nextMonthDaysItems = nextMonthDays.map((dayNumber) => {
    return calendarDayItem(dayNumber, "next");
  });

  const calendarDaysItems = [
    ...daysOfWeekItems,
    ...previousMonthDaysItems,
    ...currentMonthDaysItems,
    ...nextMonthDaysItems,
  ];

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

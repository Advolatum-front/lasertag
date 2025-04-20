import { Link } from "react-router-dom";

import "./index.css";

const ActivitiesCalendar = () => {
  const daysOfWeekCaptions = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysOfWeekItems = daysOfWeekCaptions.map((item, index) => {
    return (
      <li className="activities-calendar__day-caption" key={index}>
        {item}
      </li>
    );
  });

  return (
    <div className="activities-calendar-wrapper">
      <ul className="activities-calendar__days-of-week">{daysOfWeekItems}</ul>
      <ul className="activities-calendar__calendar">
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
          <Link to="/" className="activities-calendar__link" />
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
          <Link to="/" className="activities-calendar__link" />
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
          <Link to="/" className="activities-calendar__link" />
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
          <Link to="/" className="activities-calendar__link" />
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
          <Link to="/" className="activities-calendar__link" />
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
        </li>
        <li className="activities-calendar__calendar-day">
          <span className="activities-calendar__day-number">01</span>
          <span className="activities-calendar__activity-name">
            Тренировочный бой юниоров
          </span>
          <Link to="/" className="activities-calendar__link" />
        </li>
      </ul>
    </div>
  );
};

export default ActivitiesCalendar;

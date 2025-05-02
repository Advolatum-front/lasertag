import { Link } from "react-router-dom";
import { useState } from "react";
import { inject, observer } from "mobx-react";

import { monthesNames } from "../../../utils/date/monthesNames.js";

import YearsSpinner from "../../../components/YearsSpinner";
import MonthesSpinner from "../../../components/MonthesSpinner";
import ActivitiesCalendar from "../../../components/ActivitiesCalendar";

import { stripYear } from "../../../utils/date/functions";

import "./index.css";

const ActivitiesCalendarPage = inject("ActivitiesStore")(
  observer(({ ActivitiesStore }) => {
    const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
    const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());

    const decreaseYear = () => {
      setCalendarYear(calendarYear - 1);
    };

    const increaseYear = () => {
      setCalendarYear(calendarYear + 1);
    };

    const decreaseMonth = () => {
      const newVal =
        calendarMonth === 0 ? monthesNames.length - 1 : calendarMonth - 1;
      setCalendarMonth(newVal);
    };

    const increaseMonth = () => {
      const newVal =
        calendarMonth === monthesNames.length - 1 ? 0 : calendarMonth + 1;
      setCalendarMonth(newVal);
    };

    return (
      <section className="calendar-section">
        <h1 className="calendar-section__header">Мероприятия</h1>
        <h2 className="calendar-section__closest-activities-header">
          Ближайшие мероприятия
        </h2>
        <ul className="calendar-section__closest-activities-list">
          <li className="calendar-section__closest-activity-item">
            <div className="calendar-section__closest-activity-date">03.12</div>
            <div className="calendar-section__closest-activity-info">
              <div className="calendar-section__closest-activity-top-part">
                <h3 className="calendar-section__closest-activity-header">
                  Тренировочный бой юниоров Тренировочный бой юниоров
                  Тренировочный бой юниоров Тренировочный бой юниоров
                  Тренировочный бой юниоров Тренировочный бой юниоров
                  Тренировочный бой юниоров Тренировочный бой юниоров
                </h3>
                <Link className="calendar-section__link-more">Подробнее</Link>
              </div>
              <div className="calendar-section__description">
                Подробное описание мероприятия для полноты картины, но не
                совсем, чтобы можно было перейти по кнопке и прочитать больше
                информации
              </div>
            </div>
          </li>
          <li className="calendar-section__closest-activity-item">
            <div className="calendar-section__closest-activity-date">03.12</div>
            <div className="calendar-section__closest-activity-info">
              <div className="calendar-section__closest-activity-top-part">
                <h3 className="calendar-section__closest-activity-header">
                  Турнир полуфинала Запада
                </h3>
                <Link className="calendar-section__link-more">Подробнее</Link>
              </div>
              <div className="calendar-section__description">
                Подробное описание мероприятия для полноты картины, но не
                совсем, чтобы можно было перейти по кнопке и прочитать больше
                информации
              </div>
            </div>
          </li>
          <li className="calendar-section__closest-activity-item">
            <div className="calendar-section__closest-activity-date">03.12</div>
            <div className="calendar-section__closest-activity-info">
              <div className="calendar-section__closest-activity-top-part">
                <h3 className="calendar-section__closest-activity-header">
                  Мировая Лига лазерного боя
                </h3>
                <Link className="calendar-section__link-more">Подробнее</Link>
              </div>
              <div className="calendar-section__description">
                Подробное описание мероприятия для полноты картины, но не
                совсем, чтобы можно было перейти по кнопке и прочитать больше
                информации
              </div>
            </div>
          </li>
        </ul>
        <div className="calendar-section__calendar-container">
          <YearsSpinner
            startValue={calendarYear}
            onIncrease={increaseYear}
            onDecrease={decreaseYear}
            className="calendar-section__spinner"
          />

          <MonthesSpinner
            startValue={calendarMonth}
            values={monthesNames}
            onDecrease={decreaseMonth}
            onIncrease={increaseMonth}
            className="calendar-section__spinner"
          />
          <ActivitiesCalendar
            month={calendarMonth}
            year={calendarYear}
            className="calendar-section__calendar"
          />
        </div>
      </section>
    );
  }),
);

export default ActivitiesCalendarPage;

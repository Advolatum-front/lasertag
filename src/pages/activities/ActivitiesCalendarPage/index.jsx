import { Link } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { monthesNames } from "../../../utils/date/monthesNames.js";

import YearsSpinner from "../../../components/YearsSpinner";
import MonthesSpinner from "../../../components/MonthesSpinner";
import ActivitiesCalendar from "../../../components/ActivitiesCalendar";

import "./index.css";

const CURRENT_DATE = new Date();

const ActivitiesCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(CURRENT_DATE);

  const calendarYear = useMemo(
    () => selectedDate.getFullYear(),
    [selectedDate],
  );
  const calendarMonth = useMemo(() => selectedDate.getMonth(), [selectedDate]);

  const handleDecreaseMonth = useCallback(() => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() - 1)),
    );
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
              Подробное описание мероприятия для полноты картины, но не совсем,
              чтобы можно было перейти по кнопке и прочитать больше информации
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
              Подробное описание мероприятия для полноты картины, но не совсем,
              чтобы можно было перейти по кнопке и прочитать больше информации
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
              Подробное описание мероприятия для полноты картины, но не совсем,
              чтобы можно было перейти по кнопке и прочитать больше информации
            </div>
          </div>
        </li>
      </ul>
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
          month={calendarMonth}
          year={calendarYear}
          className="calendar-section__calendar"
        />
      </div>
    </section>
  );
};

export default ActivitiesCalendarPage;

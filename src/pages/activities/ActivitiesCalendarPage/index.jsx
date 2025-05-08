import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";

import { monthesNames } from "../../../utils/date/monthesNames.js";

import YearsSpinner from "../../../components/YearsSpinner";
import MonthesSpinner from "../../../components/MonthesSpinner";
import ActivitiesCalendar from "../../../components/ActivitiesCalendar";
import NoData from "../../../components/NoData";

import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import { SITE_NAME } from "../../../utils/site-name";
import { stripYear } from "../../../utils/date/functions";

import "./index.css";

const ActivitiesCalendarPage = inject("ActivitiesStore")(
  observer(({ ActivitiesStore }) => {
    const {
      activitiesList,
      fetchActivities,
      upcomingActivities,
      fetchUpcomingActivities,
    } = ActivitiesStore;

    useEffect(() => {
      fetchActivities();
      fetchUpcomingActivities();
    }, [fetchActivities, fetchUpcomingActivities]);
    useDocumentTitle("Мероприятия");

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

    const upcomingActivitiesBlock =
      upcomingActivities.length === 0 ? (
        <NoData />
      ) : (
        upcomingActivities.map((item) => {
          const { id, date, title, description } = item;
          const visibleDate = stripYear(date);
          const url = `/activities/${id}`;

          return (
            <li className="calendar-section__closest-activity-item" key={id}>
              <div className="calendar-section__closest-activity-date">
                {visibleDate}
              </div>
              <div className="calendar-section__closest-activity-info">
                <div className="calendar-section__closest-activity-top-part">
                  <h3 className="calendar-section__closest-activity-header">
                    {title}
                  </h3>
                  <Link to={url} className="calendar-section__link-more">
                    Подробнее
                  </Link>
                </div>
                <div className="calendar-section__description">
                  {description}
                </div>
              </div>
            </li>
          );
        })
      );

    return (
      <section className="calendar-section">
        <h1 className="calendar-section__header">Мероприятия</h1>
        <h2 className="calendar-section__closest-activities-header">
          Ближайшие мероприятия
        </h2>
        <ul className="calendar-section__closest-activities-list">
          {upcomingActivitiesBlock}
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
            activities={activitiesList}
            className="calendar-section__calendar"
          />
        </div>
      </section>
    );
  }),
);

export default ActivitiesCalendarPage;

import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import NoData from "../../../components/NoData";

import { stripYear } from "../../../utils/date/functions";

import "./index.css";

const Activities = inject("ActivitiesStore")(
  observer(({ ActivitiesStore }) => {
    const { fetchUpcomingActivities, upcomingActivities } = ActivitiesStore;

    useEffect(() => {
      fetchUpcomingActivities();
    }, []);

    if (upcomingActivities.length === 0) {
      return (
        <section className="activities">
          <div className="activities__shooter" />
          <h2 className="activities__section-header">Мероприятия</h2>
          <NoData />
          <Link to="/activities" className="activities__link-to-all">
            <span>Все мероприятия</span>
          </Link>
        </section>
      );
    }

    const activityItems = upcomingActivities.map((item) => {
      const { id, date, title, description } = item;
      const visibleDate = stripYear(date);
      const url = `/activities/${id}`;

      return (
        <li className="activities__list-item">
          <div className="activities__date">{visibleDate}</div>
          <div className="activities__info">
            <div className="activities__header">{title}</div>
            <div className="activities__description">{description}</div>
            <Link to={url} className="activities__link">
              Подробнее
            </Link>
          </div>
        </li>
      );
    });

    return (
      <section className="activities">
        <div className="activities__shooter" />
        <h2 className="activities__section-header">Мероприятия</h2>
        <ul className="activities__list">{activityItems}</ul>
        <Link to="/activities" className="activities__link-to-all">
          <span>Все мероприятия</span>
        </Link>
      </section>
    );
  }),
);

export default Activities;

import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LabeledInput from "../../../../../components/controls/LabeledInput";
import NoData from "../../../../../components/NoData";
import ActivityRequestStatus from "../../../../../components/ActivityRequestStatus";

import {
  CAF_ALL,
  CAF_MY,
  CAF_AVAIBLE,
} from "../../../../../utils/cabinet-activities-filter-state.js";
import { stripYear } from "../../../../../utils/date/functions";

import { useDocumentTitle } from "../../../../../hooks/useDocumentTitle";

import "./index.css";

const ActivitiesList = inject(
  "UsersStore",
  "ActivitiesStore",
)(
  observer(({ UsersStore, ActivitiesStore }) => {
    useDocumentTitle("Личный кабинет, мероприятия");

    const { fetchActivities, activitiesList } = ActivitiesStore;

    useEffect(() => {
      fetchActivities();
    }, [fetchActivities]);

    const [filterState, setFilterState] = useState(CAF_ALL);
    const filterData = [
      {
        caption: "Все",
        value: CAF_ALL,
      },
      {
        caption: "Мои",
        value: CAF_MY,
      },
      {
        caption: "Доступные",
        value: CAF_AVAIBLE,
      },
    ];

    const filterListItems = filterData.map((item, index) => {
      const { caption, value } = item;

      return (
        <li className="cabinet-activities__list-item" key={index}>
          <input
            type="radio"
            name="activies-filter"
            id={value}
            value={value}
            className="cabinet-activities__filter-radio"
            onChange={() => setFilterState(value)}
            checked={filterState === value}
          />
          <label className="cabinet-activities__option" htmlFor={value}>
            {caption}
          </label>
        </li>
      );
    });

    if (activitiesList.length === 0) {
      return (
        <div className="cabinet-activities">
          <h1 className="cabinet-activities__header">Мероприятия</h1>
          <div className="cabinet-activities__filter-block">
            <ul className="cabinet-activities__filter">{filterListItems}</ul>
            <form className="cabinet-activities__seacrh-form">
              <LabeledInput id="seacrhInput" label="Поиск по названию" />
            </form>
            <NoData />
          </div>
        </div>
      );
    }

    const cabinetActivityItems = activitiesList.map((activity) => {
      const { id, date, status, title, description } = activity;
      const urlLink = `/cabinet/activities/${id}`;
      const visibleDate = stripYear(date);

      return (
        <li className="cabinet-activities__activity-item" key={id}>
          <div className="cabinet-activities__activity-date">{visibleDate}</div>
          <Link to={urlLink} className="cabinet-activities__activity-name">
            {title}
          </Link>
          <div className="cabinet-activities__activity-description">
            {description}
          </div>
          <ActivityRequestStatus
            code={status}
            className="cabinet-activities__activity-status"
            activityId={id}
          />
        </li>
      );
    });

    return (
      <div className="cabinet-activities">
        <h1 className="cabinet-activities__header">Мероприятия</h1>
        <div className="cabinet-activities__filter-block">
          <ul className="cabinet-activities__filter">{filterListItems}</ul>
          <form className="cabinet-activities__seacrh-form">
            <LabeledInput id="seacrhInput" label="Поиск по названию" />
          </form>
        </div>
        <div className="cabinet-activities__content">
          <h2 className="cabinet-activities__list-category">Прошедшие</h2>
          <div className="cabinet-activities__activities-list-conainer">
            <ul className="cabinet-activities__captions-list">
              <li className="cabinet-activities__caption-item date">Дата</li>
              <li className="cabinet-activities__caption-item name">
                Наименование
              </li>
              <li className="cabinet-activities__caption-item description">
                Описание
              </li>
              <li className="cabinet-activities__caption-item status">
                Статус заявки
              </li>
            </ul>
            <ul className="cabinet-activities__activities-list">
              {cabinetActivityItems}
            </ul>
          </div>

          <div className="cabinet-activities__tip">
            Список мероприятий постоянно пополняется. Не забывайте почаще
            навещать нас.
          </div>
        </div>
      </div>
    );
  }),
);

export default ActivitiesList;

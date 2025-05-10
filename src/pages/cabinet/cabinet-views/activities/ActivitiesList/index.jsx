import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";

import LabeledInput from "../../../../../components/controls/LabeledInput";
import CabinetActivitiesTable from "../../../../../components/CabinetActivitiesTable";

import {
  CAF_ALL,
  CAF_MY,
  CAF_AVAIBLE,
} from "../../../../../utils/cabinet-activities-filter-state.js";
import { futureAndPast } from "./future-and-past";
import { ARS_PENDING } from "../../../../../utils/activities-statuses";

import { useDocumentTitle } from "../../../../../hooks/useDocumentTitle";

import "./index.css";

const ActivitiesList = inject(
  "UsersStore",
  "ActivitiesStore",
)(
  observer(({ UsersStore, ActivitiesStore }) => {
    useDocumentTitle("Личный кабинет, мероприятия");
    const [searchString, setSearchString] = useState("");

    const { fetchActivitiesBySubstring, activitiesList } = ActivitiesStore;
    const { currentUser } = UsersStore;
    const currentUserActivivities = currentUser?.activities || [];

    const handleInput = (event) => {
      const { value } = event.target;

      setSearchString(event.target.value);
    };

    const handleReset = () => {
      setSearchString("");
    };

    useEffect(() => {
      fetchActivitiesBySubstring(searchString);
    }, [fetchActivitiesBySubstring, searchString]);

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

    const activitiesData = toJS(activitiesList).map((activity) => {
      const { id, date, status, title, description } = activity;
      const requestIsSent = currentUserActivivities.some((userActivity) => {
        return userActivity.id === id;
      });
      const newStatus = requestIsSent ? ARS_PENDING : status;

      return { id, date, status: newStatus, title, description };
    });

    const [future, past] = futureAndPast(activitiesData);
    const pageMainContent = (
      <div className="activities-tables-container">
        <CabinetActivitiesTable
          activitiesData={future}
          tableHeader="Предстоящие"
        />
        <CabinetActivitiesTable activitiesData={past} tableHeader="Прошедшие" />
      </div>
    );

    return (
      <div className="cabinet-activities">
        <h1 className="cabinet-activities__header">Мероприятия</h1>
        <div className="cabinet-activities__filter-block">
          <ul className="cabinet-activities__filter">{filterListItems}</ul>
          <form className="cabinet-activities__seacrh-form">
            <LabeledInput
              id="searchInput"
              label="Поиск по названию"
              value={searchString}
              onInput={handleInput}
            />
            <div className="cabinet-activities__form-buttons">
              <button type="reset" onClick={handleReset}>
                Очистить поиск
              </button>
            </div>
          </form>
        </div>
        {pageMainContent}
        <div className="cabinet-activities__tip">
          Список мероприятий постоянно пополняется. Не забывайте почаще навещать
          нас.
        </div>
      </div>
    );
  }),
);

export default ActivitiesList;

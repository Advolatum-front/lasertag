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

import { useDocumentTitle } from "../../../../../hooks/useDocumentTitle";

import "./index.css";

const ACTIVITY_PENDING_STATUS = 3;

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

    const submitSearchForm = (event) => {
      event.preventDefault();
    };

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
      const newStatus = requestIsSent ? ACTIVITY_PENDING_STATUS : status;

      return { id, date, status: newStatus, title, description };
    });

    return (
      <div className="cabinet-activities">
        <h1 className="cabinet-activities__header">Мероприятия</h1>
        <div className="cabinet-activities__filter-block">
          <ul className="cabinet-activities__filter">{filterListItems}</ul>
          <form
            className="cabinet-activities__seacrh-form"
            onSubmit={submitSearchForm}
          >
            <LabeledInput
              id="searchInput"
              label="Поиск по названию"
              value={searchString}
              onInput={handleInput}
            />
            <div className="cabinet-activities__form-buttons">
              <button type="submit">Найти</button>
              <button type="reset" onClick={handleReset}>
                Очистить
              </button>
            </div>
          </form>
        </div>
        <CabinetActivitiesTable
          activitiesData={activitiesData}
          tableHeader="Все мероприятия"
        />
        <div className="cabinet-activities__tip">
          Список мероприятий постоянно пополняется. Не забывайте почаще навещать
          нас.
        </div>
      </div>
    );
  }),
);

export default ActivitiesList;

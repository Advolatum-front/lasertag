import LabeledInput from "../../../../../components/controls/LabeledInput";

import "./index.css";

const ActivitiesList = () => {
  return (
    <div className="cabinet-activities">
      <h1 className="cabinet-activities__header">Мероприятия</h1>
      <div className="cabinet-activities__page-content">
        <div className="cabinet-activities__filter-block">
          <ul className="cabinet-activities__filter">
            <li className="cabinet-activities__list-item">
              <span className="cabinet-activities__option current">Все</span>
            </li>
            <li className="cabinet-activities__list-item">
              <button type="button" className="cabinet-activities__option">
                Активные
              </button>
            </li>
            <li className="cabinet-activities__list-item">
              <button type="button" className="cabinet-activities__option">
                Доступные
              </button>
            </li>
          </ul>
          <form className="cabinet-activities__seacrh-form">
            <LabeledInput id="seacrhInput" label="Поиск по названию" />
          </form>
        </div>
        <div className="cabinet-activities__content">
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
            <li className="cabinet-activities__activity-item">
              <div className="cabinet-activities__activity-date">12.05</div>
              <div className="cabinet-activities__activity-name">
                Кубок мира по лазерному бою
              </div>
              <div className="cabinet-activities__activity-description">
                Долгожданная борьба за мировое чемпионство по лазерному бою
              </div>
              <div className="cabinet-activities__activity-status approved">
                Одобрена
              </div>
            </li>
          </ul>
          <div className="cabinet-activities__tip">
            Список мероприятий постоянно пополняется. Не забывайте почаще
            навещать нас.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesList;

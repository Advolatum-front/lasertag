import { Link } from "react-router-dom";

import "./index.css";

const ActivitiesCalendar = () => {
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
                Тренировочный бой юниоров
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
    </section>
  );
};

export default ActivitiesCalendar;

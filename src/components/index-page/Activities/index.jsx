import { Link } from "react-router-dom";

import "./index.css";

const Activities = () => {
  return (
    <section className="activities">
      <div className="activities__shooter"></div>
      <h2 className="activities__section-header">Мероприятия</h2>
      <ul className="activities__list">
        <li className="activities__list-item">
          <div className="activities__date">11.06</div>
          <div className="activities__info">
            <div className="activities__header">Наименование мероприятия</div>
            <div className="activities__description">
              Подробное описание мероприятия для полноты картины, но не совсем,
              чтобы можно было перейти по кнопке и прочитать больше информации
            </div>
            <Link to="/activities/id" className="activities__link">
              Подробнее
            </Link>
          </div>
        </li>
        <li className="activities__list-item">
          <div className="activities__date">11.06</div>
          <div className="activities__info">
            <div className="activities__header">Наименование мероприятия</div>
            <div className="activities__description">
              Подробное описание мероприятия для полноты картины, но не совсем,
              чтобы можно было перейти по кнопке и прочитать больше информации
            </div>
            <Link to="/activities/id" className="activities__link">
              Подробнее
            </Link>
          </div>
        </li>
        <li className="activities__list-item">
          <div className="activities__date">11.06</div>
          <div className="activities__info">
            <div className="activities__header">Наименование мероприятия</div>
            <div className="activities__description">
              Подробное описание мероприятия для полноты картины, но не совсем,
              чтобы можно было перейти по кнопке и прочитать больше информации
            </div>
            <Link to="/activities/id" className="activities__link">
              Подробнее
            </Link>
          </div>
        </li>
      </ul>
      <Link to="/" className="activities__link-to-all">
        <span>Все мероприятия</span>
      </Link>
    </section>
  );
};

export default Activities;

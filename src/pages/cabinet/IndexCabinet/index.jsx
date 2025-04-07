import { Link } from "react-router-dom";

import "./index.css";

const IndexCabinet = () => {
  return (
    <div className="index-cabinet">
      <aside className="cabinet-menu">
        <div className="cabinet-menu__user-card">
          <img
            src="/userpics/userpic-1.png"
            alt=""
            className="cabinet-menu__user-pic"
          />
          <div className="cabinet-menu__user-name">Мария Богуш</div>
          <div className="cabinet-menu__user-id">id: 598613245896</div>
        </div>
        <ul className="cabinet-menu__nav-list">
          <li className="cabinet-menu__list-item">
            <Link to="cabinet/activities" className="cabinet-menu__link">
              Мероприятия
            </Link>
          </li>
          <li className="cabinet-menu__list-item">
            <span className="cabinet-menu__active-item">Что-то активное</span>
          </li>
          <li className="cabinet-menu__list-item magrin-bottom">
            <Link to="cabinet/favorites" className="cabinet-menu__link">
              Избранное
            </Link>
          </li>
          <li className="cabinet-menu__list-item">
            <Link to="cabinet/myprofile" className="cabinet-menu__link">
              Мой профиль
            </Link>
          </li>
          <li className="cabinet-menu__list-item">
            <button className="cabinet-menu__button-logout">Выход</button>
          </li>
        </ul>
      </aside>
      <div className="index-cabinet__right-part">ююю</div>
    </div>
  );
};

export default IndexCabinet;

import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

import "./index.css";

const IndexCabinet = () => {
  const locationPathname = useLocation().pathname;
  const [cabinetMenuOpened, setCabinetMenuOpened] = useState(false);

  const openCabinetMenu = () => {
    setCabinetMenuOpened(true);
  };

  const closeCabinetMenu = () => {
    setCabinetMenuOpened(false);
  };

  const cabinetMenuClassName = cabinetMenuOpened
    ? "cabinet-menu opened"
    : "cabinet-menu";

  const menuDataLinks = [
    {
      caption: "Мероприятия",
      link: "/cabinet/activities",
    },
    {
      caption: "Избранное",
      link: "/cabinet/favorites",
    },
    {
      caption: "Мой профиль",
      link: "/cabinet/myprofile",
    },
  ];

  const menuLinkItems = menuDataLinks.map((item, index) => {
    const { caption, link } = item;

    const linkOrButton = locationPathname.includes(link) ? (
      <span className="cabinet-menu__active-item">{caption}</span>
    ) : (
      <Link to={link} className="cabinet-menu__link">
        {caption}
      </Link>
    );

    return (
      <li className="cabinet-menu__list-item" key={index}>
        {linkOrButton}
      </li>
    );
  });

  return (
    <div className="index-cabinet">
      <div className="index-cabinet__bugrer-button-menu-container">
        <button
          className="index-cabinet__bugrer-button"
          onClick={openCabinetMenu}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>
      </div>
      <aside className={cabinetMenuClassName}>
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
          {menuLinkItems}
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

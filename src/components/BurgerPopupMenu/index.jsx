import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import "./index.css";

const popupContainer = document.getElementById("popup");

const BurgerPopupMenu = (props) => {
  const { open, onClosePopupMenu } = props;
  const popupMenu = (
    <nav className="header__burger-popup-menu">
      <button
        type="button"
        className="header__close-popup-menu"
        onClick={() => onClosePopupMenu()}
      ></button>
      <ul className="header__popup-nav-list">
        <li>
          <Link to="/documents" className="header__popp-nav-link">
            Документы
          </Link>
        </li>
        <li>
          <Link to="/" className="header__popp-nav-link">
            Новости
          </Link>
        </li>
        <li>
          <Link to="/" className="header__popp-nav-link">
            Мероприятия
          </Link>
        </li>
        <li>
          <Link to="/" className="header__popp-nav-link">
            Галерея
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="header__popp-nav-link">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );

  return open ? createPortal(popupMenu, popupContainer) : null;
};

export default BurgerPopupMenu;

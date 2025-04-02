import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { mainNavLinks } from "../../utils/main-nav-links.js";

import { ReactComponent as Cross } from "../../svg/cross-ico.svg";
import { ReactComponent as Profile } from "../../svg/profile-link-def.svg";

import "./index.css";

const popupContainer = document.getElementById("popup");

const BurgerPopupMenu = (props) => {
  const { open, onClosePopupMenu, onNavigate } = props;

  const navListItemsArray = mainNavLinks.map((obj, index) => {
    return (
      <li key={index}>
        <Link
          to={obj.href}
          className="header__popp-nav-link"
          onClick={() => onNavigate()}
        >
          {obj.caption}
        </Link>
      </li>
    );
  });

  const popupMenu = (
    <nav className="header__burger-popup-menu">
      <button
        type="button"
        className="header__close-popup-menu"
        onClick={() => onClosePopupMenu()}
      >
        <Cross />
      </button>
      <ul className="header__popup-nav-list">{navListItemsArray}</ul>
      <Link className="header__profile-link">
        <Profile />
        <span>Личный кабинет</span>
      </Link>
    </nav>
  );

  return open ? createPortal(popupMenu, popupContainer) : null;
};

export default BurgerPopupMenu;

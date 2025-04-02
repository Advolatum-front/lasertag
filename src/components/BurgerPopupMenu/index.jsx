import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { useLocation } from "react-router";

import { mainNavLinks } from "../../utils/main-nav-links.js";

import { ReactComponent as Cross } from "../../svg/cross-ico.svg";
import { ReactComponent as Profile } from "../../svg/profile-link-def.svg";

import "./index.css";

const popupContainer = document.getElementById("popup");

const BurgerPopupMenu = (props) => {
  const pathname = useLocation().pathname.match(/(^\/\w+)/)?.[1];
  const currentUnitName = pathname || "/";

  const { open, onClosePopupMenu, onNavigate } = props;

  const navListItemsArray = mainNavLinks.map((obj, index) => {
    const { href, caption } = obj;
    const listItem =
      currentUnitName === href ? (
        <span className="popup-menu__popp-nav-current">{caption}</span>
      ) : (
        <Link
          to={href}
          className="popup-menu__popp-nav-link"
          onClick={() => onNavigate()}
        >
          {caption}
        </Link>
      );

    return <li key={index}>{listItem}</li>;
  });

  const popupMenu = (
    <nav className="popup-menu__burger-popup-menu">
      <button
        type="button"
        className="popup-menu__close-popup-menu"
        onClick={() => onClosePopupMenu()}
      >
        <Cross />
      </button>
      <ul className="popup-menu__popup-nav-list">{navListItemsArray}</ul>
      <Link className="popup-menu__profile-link">
        <Profile />
        <span>Личный кабинет</span>
      </Link>
    </nav>
  );

  return open ? createPortal(popupMenu, popupContainer) : null;
};

export default BurgerPopupMenu;

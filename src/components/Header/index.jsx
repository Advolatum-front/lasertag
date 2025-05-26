import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { mainNavLinks } from "../../utils/main-nav-links.js";

import logo from "../../img/logo.webp";
import { ReactComponent as ProfilePic } from "../../svg/profile-link-def.svg";
import { ReactComponent as Cross } from "../../svg/cross-ico.svg";
import NO_PHOTO_URL from "../../img/cabinet/no-photo.webp";

import "./index.css";

const Header = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const { isAuthenticated, currentUser } = UsersStore;

    const pathname = useLocation().pathname.match(/(^\/\w+)/)?.[1];
    const currentUnitName = pathname || "/index";

    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

    const openBurgerMenu = () => {
      setBurgerMenuOpened(true);
    };

    const closeBurgerMenu = () => {
      setBurgerMenuOpened(false);
    };

    const navListItemsArray = mainNavLinks.map((obj, index) => {
      const { href, caption } = obj;
      const linkClassName = href.includes(currentUnitName)
        ? "header__nav-link-active"
        : "header__nav-link";

      return (
        <li key={index}>
          <Link to={href} className={linkClassName} onClick={closeBurgerMenu}>
            {caption}
          </Link>
        </li>
      );
    });

    const headerNavClassName = burgerMenuOpened
      ? "header__nav opened"
      : "header__nav";

    const src = currentUser?.photo || NO_PHOTO_URL;
    const userAvatar = <img src={src} alt="" className="header__profile-pic" />;
    const cabinetLinkContent = isAuthenticated ? (
      userAvatar
    ) : (
      <ProfilePic className="header__profile-pic" />
    );

    return (
      <header className="header">
        <Link to="/" className="header__logo-container">
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <nav className={headerNavClassName}>
          <button
            className="header__button-close-burger-menu"
            onClick={closeBurgerMenu}
          >
            <Cross />
          </button>
          <ul className="header__nav-list">{navListItemsArray}</ul>
          <Link to="/cabinet" className="header__profile-link" onClick={closeBurgerMenu}>
            {cabinetLinkContent}

            <span>Личный кабинет</span>
          </Link>
        </nav>
        <button className="header__burger-menu" onClick={openBurgerMenu}>
          <i className="header__burger-bar"></i>
          <i className="header__burger-bar"></i>
          <i className="header__burger-bar"></i>
        </button>
        <Link to="/cabinet" className="header__profile-pic-link">
          {cabinetLinkContent}
        </Link>
      </header>
    );
  }),
);

export default Header;

import { Link } from "react-router-dom";

import { useState } from "react";
import { useLocation } from "react-router";

// import BurgerPopupMenu from "../BurgerPopupMenu";

import { mainNavLinks } from "../../utils/main-nav-links.js";

import logo from "../../img/logo.webp";
import { ReactComponent as ProfilePic } from "../../svg/profile-link-def.svg";
import { ReactComponent as Cross } from "../../svg/cross-ico.svg";

import "./index.css";

const Header = () => {
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
    const listItem = href.includes(currentUnitName) ? (
      <span className="header__nav-current">{caption}</span>
    ) : (
      <Link to={href} className="header__nav-link" onClick={closeBurgerMenu}>
        {caption}
      </Link>
    );

    return <li key={index}>{listItem}</li>;
  });

  const headerNavClassName = burgerMenuOpened
    ? "header__nav opened"
    : "header__nav";

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
        <Link className="header__profile-link" onClick={closeBurgerMenu}>
          <ProfilePic />
          <span>Личный кабинет</span>
        </Link>
      </nav>
      <button className="header__burger-menu" onClick={openBurgerMenu}>
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
      </button>
      <Link to="/" className="header__profile-pic-link">
        <ProfilePic className="header__profile-pic" />
      </Link>
    </header>
  );
};

export default Header;

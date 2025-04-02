import { Link } from "react-router-dom";

import { useState } from "react";
import { useLocation } from "react-router";

import BurgerPopupMenu from "../BurgerPopupMenu";

import { mainNavLinks } from "../../utils/main-nav-links.js";

import logo from "../../img/logo.webp";
import { ReactComponent as ProfilePic } from "../../svg/profile-link-def.svg";

import "./index.css";

const Header = () => {
  const pathname = useLocation().pathname.match(/(^\/\w+)/)?.[1];
  const currentUnitName = pathname || "/";

  const [popupMenuOpened, setPopupMenuOpened] = useState(false);

  const openPopupMenu = () => {
    setPopupMenuOpened(true);
    document.body.style.overflow = "hidden";
  };

  const closePopupMenu = () => {
    setPopupMenuOpened(false);
    document.body.style.overflow = "auto";
  };

  const navListItemsArray = mainNavLinks.map((obj, index) => {
    const { href, caption } = obj;
    const listItem =
      currentUnitName === href ? (
        <span className="header__nav-current">{caption}</span>
      ) : (
        <Link to={href} className="header__nav-link">
          {caption}
        </Link>
      );

    return <li key={index}>{listItem}</li>;
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">{navListItemsArray}</ul>
      </nav>
      <button className="header__burger-menu" onClick={() => openPopupMenu()}>
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
      </button>
      <Link to="/" className="header__profile-pic-link">
        <ProfilePic className="header__profile-pic" />
      </Link>
      <BurgerPopupMenu
        open={popupMenuOpened}
        onClosePopupMenu={() => closePopupMenu()}
        onNavigate={() => closePopupMenu()}
      />
    </header>
  );
};

export default Header;

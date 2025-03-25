import { Link } from "react-router-dom";
import { useState } from "react";

import BurgerPopupMenu from "../BurgerPopupMenu";

import { mainNavLinks } from "../../utils/main-nav-links.js";

import pathToSmallLogo from "../../img/small-logo.png";
import { ReactComponent as ProfilePic } from "../../svg/profile-link-def.svg";

import "./index.css";

const Header = () => {
  const [popupMenuOpened, setPopupMenuOpened] = useState(false);

  const navListItemsArray = mainNavLinks.map((obj, index) => {
    return (
      <li key={index}>
        <Link to={obj.href} className="header__nav-link">
          {obj.caption}
        </Link>
      </li>
    );
  });

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={pathToSmallLogo} alt="" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">{navListItemsArray}</ul>
      </nav>
      <button
        className="header__burger-menu"
        onClick={() => setPopupMenuOpened(true)}
      >
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
      </button>
      <Link to="/">
        <ProfilePic className="header__profile-pic" />
      </Link>
      <BurgerPopupMenu
        open={popupMenuOpened}
        onClosePopupMenu={() => setPopupMenuOpened(false)}
        onNavigate={() => setPopupMenuOpened(false)}
      />
    </header>
  );
};

export default Header;

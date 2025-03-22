import { Link } from "react-router-dom";

import pathToSmallLogo from "../../img/small-logo.png";

import { ReactComponent as ProfilePic } from "../../svg/profile-link-def.svg";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={pathToSmallLogo} alt="" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Link to="/" className="header__nav-link">
              Документы
            </Link>
          </li>
          <li>
            <Link to="/" className="header__nav-link">
              Новости
            </Link>
          </li>
          <li>
            <Link to="/" className="header__nav-link">
              Мероприятия
            </Link>
          </li>
          <li>
            <Link to="/" className="header__nav-link">
              Галерея
            </Link>
          </li>
          <li>
            <Link to="/" className="header__nav-link">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <button className="header__burger-menu">
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
        <i className="header__burger-bar"></i>
      </button>
      <Link to="/">
        <ProfilePic className="header__profile-pic" />
      </Link>
    </header>
  );
};

export default Header;

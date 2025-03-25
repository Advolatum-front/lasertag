import { Link } from "react-router-dom";

import { mainNavLinks } from "../../utils/main-nav-links.js";

import pathToBigLogo from "../../img/big-logo.webp";

import "./index.css";

const Footer = () => {
  const navListItemArray = mainNavLinks.map((obj, index) => {
    return (
      <li key={index}>
        <Link to={obj.href} className="footer__menu-link">
          {obj.caption}
        </Link>
      </li>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__logo-and-menu">
        <img src={pathToBigLogo} alt="" className="footer__logo" />
        <ul className="footer__menu">{navListItemArray}</ul>
      </div>
      <form className="footer__feedback-form">
        <div className="footer__feedback-form-header">
          Связаться с нами можно здесь!
        </div>
        <input
          type="text"
          className="footer__form-text-field"
          placeholder="Ваше имя"
          required
        />
        <input
          type="email"
          className="footer__form-text-field"
          placeholder="Ваш e-mail"
          required
        />
        <button type="button" className="footer__submit-form">
          <span>Отправить</span>
        </button>
      </form>
    </footer>
  );
};

export default Footer;

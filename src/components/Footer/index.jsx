import { Link } from "react-router-dom";

import pathToBigLogo from "../../img/big-logo.webp";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-and-menu">
        <img src={pathToBigLogo} alt="" className="footer__logo" />
        <ul className="footer__menu">
          <li>
            <Link to="/documents" className="footer__menu-link">
              Документы
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__menu-link">
              Новости
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__menu-link">
              Мероприятия
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__menu-link">
              Галерея
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="footer__menu-link">
              Контакты
            </Link>
          </li>
        </ul>
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

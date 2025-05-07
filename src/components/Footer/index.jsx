import { useState } from "react";
import { Link } from "react-router-dom";

import MessageDlg from "../popups/MessageDlg/";

import { mainNavLinks } from "../../utils/main-nav-links";

import { PDT_ALERT } from "../../utils/popup-dialog-types";

import logo from "../../img/logo.webp";

import "./index.css";

const Footer = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const navListItemArray = mainNavLinks.map((obj, index) => {
    return (
      <li key={index}>
        <Link to={obj.href} className="footer__menu-link">
          {obj.caption}
        </Link>
      </li>
    );
  });

  const submitForm = (event) => {
    event.preventDefault();
    setAlertOpen(true);
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer__logo-and-menu">
        <img src={logo} alt="" className="footer__logo" />
        <ul className="footer__menu">{navListItemArray}</ul>
      </div>
      <form className="footer__feedback-form" onSubmit={submitForm}>
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
        <button type="submit" className="footer__submit-form">
          <span>Отправить</span>
        </button>
        <MessageDlg
          text="Мы с Вами свяжемся."
          type={PDT_ALERT}
          onClose={closeAlert}
          open={alertOpen}
        />
      </form>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

import LabeledInput from "../../components/controls/LabeledInput";

import "./index.css";

const RestorePassword = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="restore-wrapper">
      <form className="restore-wrapper__form" onSubmit={submitForm}>
        <div className="restore-wrapper__form-header">
          Восстановление пароля
        </div>
        <div className="restore-wrapper__form-tip">
          Введите адрес электронной почты, связанный с вашим аккаунтом, и мы
          вышлем вам ссылку для изменения пароля
        </div>
        <LabeledInput type="email" label="E-mail" required />
        <button type="submit" className="restore-wrapper__submit">
          Сбросить пароль
        </button>
        <Link to="/" className="restore-wrapper__link">
          Я вспомнил(а) пароль
        </Link>
      </form>
      <div className="restore-wrapper__bg"></div>
    </div>
  );
};

export default RestorePassword;

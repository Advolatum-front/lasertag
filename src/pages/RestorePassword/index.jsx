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
          Введите адрес электронной почты, связанный с вашим аккаунтом, а также
          новый пароль и его подтверждение
        </div>
        <LabeledInput type="email" label="E-mail" required />
        <LabeledInput type="email" id="email" label="Новый пароль" required />
        <LabeledInput
          type="email"
          id="email"
          label="Подвержите новый пароль"
          required
        />
        <button type="submit" className="restore-wrapper__submit">
          Сбросить пароль
        </button>
        <Link to="/login" className="restore-wrapper__link">
          Я вспомнил(а) пароль
        </Link>
      </form>
      <div className="restore-wrapper__bg"></div>
    </div>
  );
};

export default RestorePassword;

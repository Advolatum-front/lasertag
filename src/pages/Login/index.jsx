import { Link } from "react-router-dom";

import LabeledInput from "../../components/controls/LabeledInput";

import "./index.css";

const Login = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <form className="login-wrapper__form" onSubmit={submitForm}>
        <div className="login-wrapper__form-header">Восстановление пароля</div>
        <div className="login-wrapper__form-tip">
          Введите адрес электронной почты, связанный с вашим аккаунтом, и мы
          вышлем вам ссылку для изменения пароля
        </div>
        <LabeledInput type="email" label="E-mail" required />
        <button type="submit" className="login-wrapper__submit">
          Сбросить пароль
        </button>
        <Link to="/" className="login-wrapper__link">
          Я вспомнил(а) пароль
        </Link>
      </form>
      <div className="login-wrapper__bg"></div>
    </div>
  );
};

export default Login;

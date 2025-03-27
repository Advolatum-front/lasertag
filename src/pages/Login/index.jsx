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
        <div className="login-wrapper__form-header">Вход</div>
        <LabeledInput type="email" label="E-mail" required />
        <LabeledInput type="password" label="Пароль" required />

        <div className="login-wrapper__links">
          <Link to="/restorepassword" className="login-wrapper__link-item">
            Забыли пароль?
          </Link>
          <Link to="/registration" className="login-wrapper__link-item">
            Нет аккаунта?
          </Link>
        </div>
        <button type="submit" className="login-wrapper__submit">
          Войти
        </button>
      </form>
      <div className="login-wrapper__bg"></div>
    </div>
  );
};

export default Login;

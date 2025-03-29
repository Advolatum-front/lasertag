import { Link } from "react-router-dom";

import LabeledInput from "../../components/controls/LabeledInput";
import StyledCheckbox from "../../components/controls/StyledCheckbox";

import "./index.css";

const Registration = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="registration">
      <form className="registration__form" onSubmit={submitForm}>
        <div className="registration__form-header">Регистрация</div>
        <div className="registration__fields">
          <LabeledInput
            required
            type="text"
            label="Имя"
            id="name"
            tabIndex="1"
          />
          <LabeledInput
            required
            type="email"
            label="Email"
            id="email"
            tabIndex="6"
          />

          <LabeledInput
            required
            type="text"
            label="Фамилия"
            id="surname"
            tabIndex="2"
          />
          <LabeledInput
            required
            type="text"
            label="Телефон"
            id="phone"
            tabIndex="7"
          />

          <LabeledInput
            required
            type="text"
            label="Страна"
            id="country"
            tabIndex="3"
          />
          <LabeledInput
            required
            type="password"
            label="Пароль"
            id="password"
            tabIndex="8"
          />

          <LabeledInput
            required
            type="text"
            label="Населённый пункт"
            id="city"
            tabIndex="4"
          />
          <LabeledInput
            required
            type="password"
            label="Повторите пароль"
            id="passwordconfirm"
            tabIndex="9"
          />

          <LabeledInput
            required
            type="date"
            label="Дата рождения"
            id="birthdate"
            tabIndex="5"
          />

          <div className="registration__additional-panel">
            <StyledCheckbox
              caption="Согласие на обработку персональных данных"
              className="registration__personal-data"
              tabIndex="10"
            />
            <Link to="/login" className="registration__link-to-login">
              Есть аккаунт?
            </Link>
          </div>
        </div>
        <button type="submit" className="registration__submit-form">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Registration;

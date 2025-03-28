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
          <LabeledInput required type="text" label="Имя" id="name" />
          <LabeledInput required type="text" label="Фамилия" id="surname" />
          <LabeledInput required type="text" label="Страна" id="country" />
          <LabeledInput
            required
            type="text"
            label="Населённый пункт"
            id="city"
          />
          <LabeledInput
            required
            type="date"
            label="Дата рождения"
            id="birthdate"
          />
          <LabeledInput required type="email" label="Email" id="email" />
          <LabeledInput required type="text" label="Телефон" id="phone" />
          <LabeledInput required type="password" label="Пароль" id="password" />
          <LabeledInput
            required
            type="password"
            label="Повторите пароль"
            id="passwordconfirm"
          />
          <div className="registration__additional-panel">
            <StyledCheckbox caption="аааа" />
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

import { useState, useRef } from "react";
import { inject, observer } from "mobx-react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import LabeledInput from "../../components/controls/LabeledInput";
import StyledCheckbox from "../../components/controls/StyledCheckbox";
import "./index.css";

const Registration = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const navigate = useNavigate();

    const [GPDRChecked, setGPDRChecked] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      surname: "",
      country: "",
      city: "",
      birthdate: "",
      password: "",
      passwordconfirm: "",
      phone: "",
      email: "",
    });

    const errorRef = useRef(null);

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleGPDRCheck = () => {
      setGPDRChecked(!GPDRChecked);
    };

    const submitForm = (event) => {
      event.preventDefault();
      UsersStore.setError(null);

      const validationErrors = UsersStore.validateUserData(formData);

      if (!GPDRChecked) {
        validationErrors.push("Согласие на обработку персональных данных");
      }

      if (validationErrors.length > 0) {
        UsersStore.setError(
          `Не заполнены или содержат ошибки: ${validationErrors.join(", ")}`,
        );
        errorRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (UsersStore.users.some((user) => user.email === formData.email)) {
        UsersStore.setError("Пользователь с таким Email уже существует");
        errorRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const { passwordconfirm, ...userToSave } = formData;
      UsersStore.users.push(userToSave);
      localStorage.setItem("users", JSON.stringify(UsersStore.users));
      UsersStore.setCurrentUser(userToSave);
      navigate("/");
    };

    if (UsersStore.isAuthenticated()) {
      return <Navigate to="/" />;
    }

    return (
      <div className="registration">
        <form className="registration__form" onSubmit={submitForm}>
          {UsersStore.error && (
            <div ref={errorRef} className="registration__error">
              {UsersStore.error}
            </div>
          )}
          <div className="registration__form-header">Регистрация</div>
          <Link to="/login" className="registration__link-to-login-start">
            Есть аккаунт?
          </Link>

          <div className="registration__fields">
            <LabeledInput
              required
              type="text"
              label="Имя"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              tabIndex="1"
              className="name"
            />
            <LabeledInput
              required
              type="email"
              label="Email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              tabIndex="6"
              className="email"
            />

            <LabeledInput
              required
              type="text"
              label="Фамилия"
              id="surname"
              value={formData.surname}
              onChange={handleInputChange}
              tabIndex="2"
              className="surname"
            />

            <LabeledInput
              required
              type="text"
              label="Телефон"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              tabIndex="7"
              className="phone"
            />

            <LabeledInput
              required
              type="text"
              label="Страна"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="country"
              tabIndex="3"
            />
            <LabeledInput
              required
              type="password"
              label="Пароль"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="password"
              tabIndex="8"
            />

            <LabeledInput
              required
              type="text"
              label="Населённый пункт"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="city"
              tabIndex="4"
            />
            <LabeledInput
              required
              type="password"
              label="Повторите пароль"
              id="passwordconfirm"
              value={formData.passwordconfirm}
              onChange={handleInputChange}
              className="passwordconfirm"
              tabIndex="9"
            />

            <LabeledInput
              required
              type="date"
              label="Дата рождения"
              id="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              className="birthdate"
              tabIndex="5"
            />

            <div className="registration__additional-panel">
              <StyledCheckbox
                caption="Согласие на обработку персональных данных"
                className="registration__personal-data"
                tabIndex="10"
                onChange={handleGPDRCheck}
                checked={GPDRChecked}
              />
              <Link to="/login" className="registration__link-to-login-end">
                Есть аккаунт?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={!GPDRChecked}
            className="registration__submit-form"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }),
);

export default Registration;

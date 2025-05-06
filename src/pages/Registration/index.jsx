import { useState, useRef } from "react";
import { inject, observer } from "mobx-react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import LabeledInput from "../../components/controls/LabeledInput";
import StyledCheckbox from "../../components/controls/StyledCheckbox";
import MessageBlock from "../../components/MessageBlock";
import { MBT_ERROR } from "../../utils/message-block-types";
import "./index.css";

const SCROLL_SETTINGS = { block: "start" };

const Registration = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const { clearError, setError, registerUser, isAuthenticated, error } =
      UsersStore;
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

    const formRef = useRef(null);

    const fieldLabels = {
      name: "Имя",
      surname: "Фамилия",
      country: "Страна",
      city: "Населённый пункт",
      birthdate: "Дата рождения",
      password: "Пароль",
      passwordconfirm: "Подтверждение пароля",
      phone: "Телефон",
      email: "Email",
    };

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      clearError();
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleGPDRCheck = () => {
      setGPDRChecked(!GPDRChecked);
    };

    const validateForm = () => {
      const requiredFields = [
        "name",
        "surname",
        "email",
        "password",
        "passwordconfirm",
        "country",
        "city",
        "birthdate",
        "phone",
      ];

      // 1. Проверяем обязательные поля
      const emptyFields = requiredFields.filter((field) => !formData[field]);
      let errorMessage = "";

      if (emptyFields.length > 0) {
        errorMessage = `Следующие поля обязательны для заполнения: ${emptyFields.map((field) => fieldLabels[field]).join(", ")}.`;
      }

      // 2. Проверяем пароли и email
      const specialErrors = [];
      if (formData.password !== formData.passwordconfirm) {
        specialErrors.push("Пароли не совпадают");
      }

      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        specialErrors.push("Email введён некорректно");
      }

      if (specialErrors.length > 0) {
        errorMessage += (errorMessage ? " " : "") + specialErrors.join(", ");
      }

      return errorMessage.trim();
    };

    const submitForm = async (event) => {
      event.preventDefault();
      clearError();

      const validationError = validateForm();
      if (validationError) {
        setError(validationError);
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
        return;
      }

      try {
        const success = await registerUser({
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          password: formData.password,
          country: formData.country,
          city: formData.city,
          birthdate: formData.birthdate,
          phone: formData.phone,
        });

        if (success) {
          navigate("/");
        }
      } catch (e) {
        setError("Ошибка при регистрации: " + e.message);
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
      }
    };

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
      <div className="registration">
        <form
          ref={formRef}
          className="registration__form"
          onSubmit={submitForm}
        >
          {error && (
            <MessageBlock type={MBT_ERROR}>
              <p>{error}</p>
            </MessageBlock>
          )}

          <div className="registration__form-header">Регистрация</div>
          <Link to="/login" className="registration__link-to-login-start">
            Есть аккаунт?
          </Link>

          <div className="registration__fields">
            <LabeledInput
              required
              type="text"
              label={fieldLabels.name}
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              tabIndex="1"
              className="name"
            />

            <LabeledInput
              required
              type="email"
              label={fieldLabels.email}
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              tabIndex="6"
              className="email"
            />

            <LabeledInput
              required
              type="text"
              label={fieldLabels.surname}
              id="surname"
              value={formData.surname}
              onChange={handleInputChange}
              tabIndex="2"
              className="surname"
            />

            <LabeledInput
              required
              type="text"
              label={fieldLabels.phone}
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              tabIndex="7"
              className="phone"
            />

            <LabeledInput
              required
              type="text"
              label={fieldLabels.country}
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="country"
              tabIndex="3"
            />

            <LabeledInput
              required
              type="password"
              label={fieldLabels.password}
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="password"
              tabIndex="8"
            />

            <LabeledInput
              required
              type="text"
              label={fieldLabels.city}
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="city"
              tabIndex="4"
            />

            <LabeledInput
              required
              type="password"
              label={fieldLabels.passwordconfirm}
              id="passwordconfirm"
              value={formData.passwordconfirm}
              onChange={handleInputChange}
              className="passwordconfirm"
              tabIndex="9"
            />

            <LabeledInput
              required
              type="date"
              label={fieldLabels.birthdate}
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
            disabled={!GPDRChecked} // Убери это, если GDPR необязателен
            className="registration__submit-form"
            tabIndex="11"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }),
);

export default Registration;

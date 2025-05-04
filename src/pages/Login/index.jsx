import { useState, useRef } from "react";
import { inject, observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";

import LabeledInput from "../../components/controls/LabeledInput";
import "./index.css";

const Login = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const errorRef = useRef(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const submitForm = async (event) => {
      event.preventDefault();
      UsersStore.setError(null);

      // Валидация обязательных полей
      const requiredFields = [
        { id: "email", label: "E-mail" },
        { id: "password", label: "Пароль" },
      ];

      const missingFields = requiredFields
        .filter((field) => !formData[field.id])
        .map((field) => field.label);

      if (missingFields.length > 0) {
        UsersStore.setError(
          `Не заполнены обязательные поля: ${missingFields.join(", ")}`,
        );
        errorRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // Попытка авторизации
      if (UsersStore.loginUser(formData)) {
        navigate("/"); // Переход на главную после успешного входа
      } else {
        errorRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <div className="login-wrapper">
        <form className="login-wrapper__form" onSubmit={submitForm}>
          {UsersStore.error && (
            <div ref={errorRef} className="login-wrapper__error">
              {UsersStore.error}
            </div>
          )}
          <div className="login-wrapper__form-header">Вход</div>

          <LabeledInput
            type="email"
            id="email"
            label="E-mail"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <LabeledInput
            type="password"
            id="password"
            label="Пароль"
            required
            value={formData.password}
            onChange={handleInputChange}
          />

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
  }),
);

export default Login;

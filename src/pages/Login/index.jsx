import { useState, useRef, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import LabeledInput from "../../components/controls/LabeledInput";
import MessageBlock from "../../components/MessageBlock";

import { MBT_ERROR } from "../../utils/message-block-types";

import { useDocumentTitle } from "../../hooks/useDocumentTitle";

import "./index.css";

const SCROLL_SETTINGS = { block: "start" };

const Login = inject("UsersStore")(
  observer(({ UsersStore }) => {
    useDocumentTitle("Авторизация");

    const { clearError, setError, loginUser, isAuthenticated, error } =
      UsersStore;

    useEffect(() => {
      clearError();
    }, [clearError]);

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const formRef = useRef(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      clearError();
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const submitForm = async (event) => {
      event.preventDefault();
      setError(null);

      const requiredFields = [
        { id: "email", label: "E-mail" },
        { id: "password", label: "Пароль" },
      ];

      const missingFields = requiredFields
        .filter((field) => !formData[field.id])
        .map((field) => field.label);

      if (missingFields.length > 0) {
        setError(`Не заполнены обязательные поля: ${missingFields.join(", ")}`);
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
        return;
      }

      if (loginUser(formData)) {
        navigate("/");
      } else {
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
      }
    };

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    const errorMessage = error && (
      <MessageBlock type={MBT_ERROR}>
        <p>{error}</p>
      </MessageBlock>
    );

    return (
      <div className="login-wrapper">
        <form
          ref={formRef}
          className="login-wrapper__form"
          onSubmit={submitForm}
        >
          {errorMessage}
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

        <div className="login-wrapper__bg" />
      </div>
    );
  }),
);

export default Login;

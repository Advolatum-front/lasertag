import { useState, useRef, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import LabeledInput from "../../components/controls/LabeledInput";
import MessageBlock from "../../components/MessageBlock";
import { MBT_ERROR } from "../../utils/message-block-types";
import "./index.css";

const SCROLL_SETTINGS = { block: "start" };

const Login = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const { clearError, setError, loginUser, isAuthenticated, error } =
      UsersStore;
    const [formData, setFormData] = useState({ email: "", password: "" });
    const formRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
      clearError();
    }, [clearError]);

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      clearError();
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const validateForm = () => {
      const errors = [];
      if (!formData.email) errors.push("Email обязателен");
      if (!formData.password) errors.push("Пароль обязателен");
      return errors;
    };

    const submitForm = async (event) => {
      event.preventDefault();
      clearError();

      const validationErrors = validateForm();
      if (validationErrors.length > 0) {
        setError(validationErrors.join(", "));
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
        return;
      }

      try {
        const success = await loginUser(formData);
        if (success) {
          navigate("/");
        } else {
          formRef.current?.scrollIntoView(SCROLL_SETTINGS);
        }
      } catch (e) {
        setError("Ошибка при входе в систему");
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
      }
    };

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
      <div className="login-wrapper">
        <form
          ref={formRef}
          className="login-wrapper__form"
          onSubmit={submitForm}
        >
          {error && (
            <MessageBlock type={MBT_ERROR}>
              <p>{error}</p>
            </MessageBlock>
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

        <div className="login-wrapper__bg" />
      </div>
    );
  }),
);

export default Login;

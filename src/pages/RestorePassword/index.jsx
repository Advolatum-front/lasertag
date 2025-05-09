import { useState, useRef } from "react";
import { inject, observer } from "mobx-react";
import { Link, Navigate } from "react-router-dom";

import LabeledInput from "../../components/controls/LabeledInput";
import MessageBlock from "../../components/MessageBlock";
import { MBT_ERROR, MBT_SUCCESS } from "../../utils/message-block-types";

import { useDocumentTitle } from "../../hooks/useDocumentTitle";

import "./index.css";

const SCROLL_SETTINGS = { block: "start" };

const RestorePassword = inject("UsersStore")(
  observer(({ UsersStore }) => {
    useDocumentTitle("Восстановление пароля");

    const { users, saveUsers, isAuthenticated } = UsersStore;

    const [formData, setFormData] = useState({
      email: "",
      newPassword: "",
      confirmPassword: "",
    });

    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(MBT_ERROR);
    const formRef = useRef(null);

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
      setMessage(null);
    };

    const validateForm = () => {
      const errors = [];

      if (!formData.email) {
        errors.push("Email обязателен");
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.push("Email введен некорректно");
      }

      if (!formData.newPassword) {
        errors.push("Новый пароль обязателен");
      }

      if (formData.newPassword !== formData.confirmPassword) {
        errors.push("Пароли не совпадают");
      }

      return errors;
    };

    const submitForm = (event) => {
      event.preventDefault();
      const errors = validateForm();

      if (errors.length > 0) {
        setMessageType(MBT_ERROR);
        setMessage(<p>{errors.join(", ")}</p>);
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
        return;
      }

      const user = users.find((u) => u.email === formData.email);

      if (!user) {
        setMessageType(MBT_ERROR);
        setMessage(<p>Пользователь с таким Email не найден</p>);
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
        return;
      }

      user.password = formData.newPassword;
      saveUsers();

      setMessageType(MBT_SUCCESS);
      setMessage(
        <p>
          Пароль успешно изменен! Теперь вы можете{" "}
          <Link to="/login">войти с новым паролем</Link>
        </p>,
      );
      formRef.current?.scrollIntoView(SCROLL_SETTINGS);

      setFormData({
        email: "",
        newPassword: "",
        confirmPassword: "",
      });
    };

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    return (
      <div className="restore-wrapper">
        <form
          ref={formRef}
          className="restore-wrapper__form"
          onSubmit={submitForm}
        >
          <div className="restore-wrapper__form-header">
            Восстановление пароля
          </div>
          <div className="restore-wrapper__form-tip">
            Введите адрес электронной почты, связанный с вашим аккаунтом, а
            также новый пароль и его подтверждение
          </div>

          {message && <MessageBlock type={messageType}>{message}</MessageBlock>}

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
            id="newPassword"
            label="Новый пароль"
            required
            value={formData.newPassword}
            onChange={handleInputChange}
          />
          <LabeledInput
            type="password"
            id="confirmPassword"
            label="Подтвердите новый пароль"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
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
  }),
);

export default RestorePassword;

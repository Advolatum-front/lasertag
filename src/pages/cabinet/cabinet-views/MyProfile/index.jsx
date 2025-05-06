import { inject, observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import LabeledInput from "../../../../components/controls/LabeledInput";
import MessageBlock from "../../../../components/MessageBlock";
import { MBT_ERROR, MBT_SUCCESS } from "../../../../utils/message-block-types";

import NO_PHOTO_URL from "../../../../img/cabinet/no-photo.webp";

import "./index.css";

const SCROLL_SETTINGS = { block: "start" };

const MyProfile = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const { currentUser, updateUser, clearError, setError, error } = UsersStore;

    const formRef = useRef(null);
    const [formData, setFormData] = useState({
      name: "",
      surname: "",
      country: "",
      city: "",
      birthdate: "",
      email: "",
      phone: "",
      photo: null,
    });
    const [successMessage, setSuccessMessage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
      if (currentUser) {
        setFormData({
          name: currentUser.name || "",
          surname: currentUser.surname || "",
          country: currentUser.country || "",
          city: currentUser.city || "",
          birthdate: currentUser.birthdate || "",
          email: currentUser.email || "",
          phone: currentUser.phone || "",
          photo: currentUser.photo || null,
        });
      }
      clearError();
    }, [currentUser, clearError]);

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      clearError();
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.match("image.*")) {
        setError("Пожалуйста, выберите файл изображения");
        scrollToTop();
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setError("Фото должно быть меньше 2 МБ");
        scrollToTop();
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({ ...prev, photo: event.target.result }));
      };
      reader.readAsDataURL(file);
    };

    const handleUploadClick = () => {
      fileInputRef.current.click();
    };

    const handleRemovePhoto = () => {
      setFormData((prev) => ({ ...prev, photo: null }));
    };

    const scrollToTop = () => {
      formRef.current?.scrollIntoView(SCROLL_SETTINGS);
    };

    const submitForm = async (event) => {
      event.preventDefault();
      clearError();
      setSuccessMessage(null);

      const requiredFields = [
        { id: "name", label: "Имя" },
        { id: "surname", label: "Фамилия" },
        { id: "country", label: "Страна" },
        { id: "city", label: "Населённый пункт" },
        { id: "birthdate", label: "Дата рождения" },
        { id: "email", label: "Email" },
        { id: "phone", label: "Телефон" },
      ];

      // Проверка на заполненность обязательных полей
      const missingFields = requiredFields
        .filter((field) => !formData[field.id])
        .map((field) => field.label);

      if (missingFields.length > 0) {
        setError(`Не заполнены обязательные поля: ${missingFields.join(", ")}`);
        scrollToTop();
        return;
      }

      // Валидация email
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setError("Введите корректный email");
        scrollToTop();
        return;
      }

      const result = await updateUser(formData);
      if (result) {
        setSuccessMessage("Данные успешно сохранены");
        scrollToTop();
      } else {
        scrollToTop();
      }
    };

    const errorMessage = error && (
      <MessageBlock type={MBT_ERROR}>
        <p>{error}</p>
      </MessageBlock>
    );

    const successMessageBlock = successMessage && (
      <MessageBlock type={MBT_SUCCESS}>
        <p>{successMessage}</p>
      </MessageBlock>
    );

    return (
      <form className="my-profile" onSubmit={submitForm} ref={formRef}>
        {errorMessage}
        {successMessageBlock}

        <h1 className="my-profile__header">Мой профиль</h1>
        <div className="my-profile__colums">
          <div className="my-profile__info">
            <LabeledInput
              required
              id="name"
              label="Имя"
              value={formData.name}
              onChange={handleInputChange}
            />
            <LabeledInput
              required
              id="surname"
              label="Фамилия"
              value={formData.surname}
              onChange={handleInputChange}
            />
            <LabeledInput
              required
              id="country"
              label="Страна"
              value={formData.country}
              onChange={handleInputChange}
            />
            <LabeledInput
              required
              id="city"
              label="Населённый пункт"
              value={formData.city}
              onChange={handleInputChange}
            />
            <LabeledInput
              type="date"
              required
              id="birthdate"
              label="Дата рождения"
              value={formData.birthdate}
              onChange={handleInputChange}
            />
            <LabeledInput
              type="email"
              required
              id="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <LabeledInput
              required
              id="phone"
              label="Телефон"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-profile__photo-loader">
            <span className="my-profile__photo-caption">Фото профиля:</span>
            <img
              src={formData?.photo || NO_PHOTO_URL}
              className="my-profile__photo"
              alt="Фото профиля"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <button
              type="button"
              className="my-profile__button-load-photo"
              onClick={handleUploadClick}
            >
              Обзор...
            </button>
            <button
              type="button"
              className="my-profile__button-remove-photo"
              onClick={handleRemovePhoto}
            >
              Удалить фото
            </button>
          </div>
        </div>
        <button type="submit" className="my-profile__button-submit">
          Сохранить
        </button>
      </form>
    );
  }),
);

export default MyProfile;

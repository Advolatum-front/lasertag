import { inject, observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import LabeledInput from "../../../../components/controls/LabeledInput";
import MessageBlock from "../../../../components/MessageBlock";
import { MBT_ERROR, MBT_SUCCESS } from "../../../../utils/message-block-types";
import "./index.css";

const SCROLL_SETTINGS = { block: "start" };

const MyProfile = inject("UsersStore")(
  observer(({ UsersStore }) => {
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
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(MBT_ERROR);
    const fileInputRef = useRef(null);

    // Загрузка данных пользователя при монтировании
    useEffect(() => {
      if (UsersStore.currentUser) {
        // Явно указываем какие поля нужно копировать
        setFormData({
          name: UsersStore.currentUser.name || "",
          surname: UsersStore.currentUser.surname || "",
          country: UsersStore.currentUser.country || "",
          city: UsersStore.currentUser.city || "",
          birthdate: UsersStore.currentUser.birthdate || "",
          email: UsersStore.currentUser.email || "",
          phone: UsersStore.currentUser.phone || "",
          photo: UsersStore.currentUser.photo || null,
        });
      }
    }, [UsersStore.currentUser]);

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.match("image.*")) {
        setMessage("Пожалуйста, выберите файл изображения");
        setMessageType(MBT_ERROR);
        scrollToTop();
        return;
      }

      // запрет загрузки файла размером более 2 * 1024 * 1024 байт (2 Мб)
      if (file.size > 2 * 1024 * 1024) {
        setMessage("Фото должно быть меньше 2 МБ");
        setMessageType(MBT_ERROR);
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

    const scrollToTop = () => {
      if (formRef.current) {
        formRef.current.scrollIntoView(SCROLL_SETTINGS);
      }
    };

    const validateForm = () => {
      const requiredFields = [
        "name",
        "surname",
        "country",
        "city",
        "birthdate",
        "email",
        "phone",
      ];
      const fieldLabels = {
        name: "Имя",
        surname: "Фамилия",
        country: "Страна",
        city: "Населённый пункт",
        birthdate: "Дата рождения",
        email: "Email",
        phone: "Телефон",
      };

      const errors = [];
      requiredFields.forEach((field) => {
        if (!formData[field]) {
          errors.push(fieldLabels[field]);
        }
      });

      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        if (!errors.includes("Email")) errors.push("Email");
      }

      return errors;
    };

    const submitForm = (event) => {
      event.preventDefault();
      const errors = validateForm();

      if (errors.length > 0) {
        setMessage(
          `Следующие поля не заполнены или содержат ошибки: ${errors.join(", ")}`,
        );
        setMessageType(MBT_ERROR);
        scrollToTop();
        return;
      }

      const result = UsersStore.updateUser(formData);
      if (result) {
        setMessage("Данные успешно сохранены!");
        setMessageType(MBT_SUCCESS);
        scrollToTop();
      } else {
        setMessage("Ошибка при сохранении данных");
        setMessageType(MBT_ERROR);
        scrollToTop();
      }
    };

    return (
      <form className="my-profile" onSubmit={submitForm} ref={formRef}>
        {message && <MessageBlock type={messageType}>{message}</MessageBlock>}

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
            {formData.photo ? (
              <img
                src={formData.photo}
                className="my-profile__photo"
                alt="Фото профиля"
              />
            ) : (
              <div className="my-profile__photo my-profile__photo--empty">
                Нет фотографии
              </div>
            )}
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
              Изменить
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

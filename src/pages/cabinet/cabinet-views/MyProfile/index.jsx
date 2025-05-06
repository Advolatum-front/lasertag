import { inject, observer } from "mobx-react";

import LabeledInput from "../../../../components/controls/LabeledInput";

import MessageBlock from "../../../../components/MessageBlock";

import { MBT_ERROR } from "../../../../utils/message-block-types";

import "./index.css";

const MyProfile = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const submitForm = (event) => {
      event.preventDefault();
    };

    return (
      <form className="my-profile" onSubmit={submitForm}>
        <h1 className="my-profile__header">Мой профиль</h1>
        <div className="my-profile__colums">
          <div className="my-profile__info">
            <LabeledInput required id="name" label="Имя" />
            <LabeledInput required id="surname" label="Фамилия" />
            <LabeledInput required id="country" label="Страна" />
            <LabeledInput required id="city" label="Населённый пункт" />
            <LabeledInput
              type="date"
              required
              id="birthdate"
              label="Дата рождения"
            />
            <LabeledInput type="email" required id="email" label="Email" />
            <LabeledInput required id="phone" label="Телефон" />
          </div>
          <div className="my-profile__photo-loader">
            <span className="my-profile__photo-caption">Фото профиля:</span>
            <img
              src="/userpics/userpic-1.png"
              className="my-profile__photo"
              alt=""
            />
            <button type="button" className="my-profile__button-load-photo">
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

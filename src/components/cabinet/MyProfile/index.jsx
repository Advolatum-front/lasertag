import LabeledInput from "../../../components/controls/LabeledInput";

import "./index.css";

const MyProfile = () => {
  /*
 required,
    type = "text",
    id,
    onInput,
    className,
    label,
    tabIndex = 0,
  */

  return (
    <form className="my-profile">
      <h1>Мой профиль</h1>
      <div className="my-profile__colums">
        <div className="my-profile__info">
          <LabeledInput required id="userName" label="Имя" />
          <LabeledInput required id="userSurname" label="Фамилия" />
          <LabeledInput required id="userCountry" label="Страна" />
          <LabeledInput required id="userCity" label="Населённый пункт" />
          <LabeledInput
            type="date"
            required
            id="userDate"
            label="Дата рождения"
          />
          <LabeledInput type="email" required id="userEmail" label="Email" />
          <LabeledInput required id="userPhone" label="Телефон" />
        </div>
        <div className="my-profile__photo-loader">
          <span className="my-profile__photo-caption">Фотография</span>
          <img
            src="/userpics/userpic-1.png"
            className="my-profile__photo"
            alt=""
          />
          <button type="button" className="my-profile__button-load">
            Изменить
          </button>
        </div>
      </div>
      <button className="my-profile__button-submit">Сохранить</button>
    </form>
  );
};

export default MyProfile;

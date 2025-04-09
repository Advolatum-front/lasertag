import LabeledInput from "../../../components/controls/LabeledInput";

import "./index.css";

const MyProfile = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="my-profile" onSubmit={submitForm}>
      <h1 className="my-profile__header">Мой профиль</h1>
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
          <span className="my-profile__photo-caption">Фото профиля:</span>
          <img
            src="/userpics/userpic-1.png"
            className="my-profile__photo"
            alt=""
          />
          <button type="button" className="my-profile__button-load_photo">
            Изменить
          </button>
        </div>
      </div>
      <button className="my-profile__button-submit">Сохранить</button>
    </form>
  );
};

export default MyProfile;

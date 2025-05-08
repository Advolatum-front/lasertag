import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import LabeledInput from "../../../../../components/controls/LabeledInput";
import MessageBlock from "../../../../../components/MessageBlock";

import {
  MBT_SUCCESS,
  MBT_ERROR,
} from "../../../../../utils/message-block-types";

import { ReactComponent as Arrow } from "../../../../../svg/arrow.svg";

import "./index.css";

const ActivityRequestForm = inject(
  "UsersStore",
  "ActivitiesStore",
)(
  observer(({ UsersStore, ActivitiesStore }) => {
    const activityId = useParams().id;

    const submitForm = (event) => {
      event.preventDefault();
    };

    return (
      <div className="activity-request">
        <h1 className="activity-request__header">Заявка</h1>
        <div className="activity-request__content">
          <Link to="/" className="activity-request__back-link">
            <Arrow />
          </Link>
          <form
            className="activity-request__form"
            id="activityRequestForm"
            onSubmit={submitForm}
          >
            <span className="activity-request__caption">
              Основная информация:
            </span>
            <LabeledInput
              required
              label="Название команды"
              id="squadName"
              className="activity-request__shorter-input"
            />
            <LabeledInput
              required
              label="Адрес командирующей организации"
              id="organizationAddres"
              className="activity-request__shorter-input"
            />
            <LabeledInput
              required
              label="Телефон командирующей организации"
              id="organizationPhone"
              className="activity-request__shorter-input"
            />
            <LabeledInput
              required
              label="Возрастная группа команды"
              id="ageGroup"
              className="activity-request__shorter-input"
            />
            <span className="activity-request__caption">
              Участники команды:
            </span>
            <div className="activity-request__participators-container">
              <ul className="activity-request__participators-list">
                <li className="activity-request__participator-item">
                  <LabeledInput
                    required
                    label="ФИО участника"
                    id="participator2_name"
                    className="activity-request__participator-name"
                  />
                  <LabeledInput
                    required
                    label="Дата рождения"
                    type="date"
                    id="participator2_birthDate"
                    className="activity-request__participator-birth-date"
                  />
                  <output
                    htmlFor="participator2_birthDate"
                    form="activityRequestForm"
                    name="Возраст участника 2"
                    className="activity-request__participator-age"
                  >
                    21 год
                  </output>
                  <LabeledInput
                    label="Ограничения здоровья"
                    id="participator2_restrictions"
                    className="activity-request__participator-restrictions"
                  />
                </li>
              </ul>
              <button type="button" className="activity-request__button-add">
                +
              </button>
            </div>
            <span className="activity-request__caption">
              Представитель команды:
            </span>
            <div className="activity-request__squad-agent-container">
              <LabeledInput
                required
                label="ФИО"
                id="squadAgentName"
                className="activity-request__squad-agent-name"
              />
              <LabeledInput
                required
                label="Телефон"
                id="squadAgentPhone"
                className="activity-request__squad-agent-phone"
              />
            </div>
            <span className="activity-request__caption">
              Список сопровождающих:
            </span>
            <div className="activity-request__attendants-container">
              <ul className="activity-request__attendants-list">
                <li className="activity-request__attendant-item">
                  <LabeledInput required label="ФИО" id="attendant1" />
                </li>
              </ul>
              <button type="button" className="activity-request__button-add">
                +
              </button>
            </div>
            <button type="submit" className="activity-request__button-submit">
              Подать заявку
            </button>
          </form>
        </div>
      </div>
    );
  }),
);

export default ActivityRequestForm;

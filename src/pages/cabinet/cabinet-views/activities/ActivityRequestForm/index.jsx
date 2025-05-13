import { useState, useRef, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import LabeledInput from "../../../../../components/controls/LabeledInput";
import MessageBlock from "../../../../../components/MessageBlock";

import { useDocumentTitle } from "../../../../../hooks/useDocumentTitle";

import {
  MBT_SUCCESS,
  MBT_ERROR,
} from "../../../../../utils/message-block-types";

import { ReactComponent as Arrow } from "../../../../../svg/arrow.svg";

import "./index.css";

const SCROLL_SETTINGS = { block: "start", behavior: "smooth" };

const ActivityRequestForm = inject(
  "UsersStore",
  "ActivitiesStore",
)(
  observer(({ UsersStore, ActivitiesStore }) => {
    const activityId = useParams().id;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [participators, setParticipators] = useState([
      { name: "", birthDate: "", age: "", restrictions: "" },
    ]);
    const [attendants, setAttendants] = useState([""]);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
      squadName: "",
      organizationAddres: "",
      organizationPhone: "",
      ageGroup: "",
      squadAgentName: "",
      squadAgentPhone: "",
    });

    useDocumentTitle("Подать заявку на мероприятие");

    useEffect(() => {
      UsersStore.clearError();
    }, [UsersStore]);

    useEffect(() => {
      if (isSubmitted) {
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
      }
    }, [isSubmitted]);

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
      if (error) setError(null);
    };

    const handleParticipatorChange = (index, field, value) => {
      const updatedParticipators = [...participators];
      updatedParticipators[index][field] = value;
      setParticipators(updatedParticipators);
    };

    const handleAttendantChange = (index, value) => {
      const updatedAttendants = [...attendants];
      updatedAttendants[index] = value;
      setAttendants(updatedAttendants);
    };

    const calculateAge = (birthDate) => {
      if (!birthDate) return "";

      const today = new Date();
      const birthDateObj = new Date(birthDate);

      if (birthDateObj > today) {
        return "";
      }

      let age = today.getFullYear() - birthDateObj.getFullYear();
      const monthDiff = today.getMonth() - birthDateObj.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
      ) {
        age--;
      }

      let ageText;
      const lastDigit = age % 10;
      const lastTwoDigits = age % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        ageText = `${age} лет`;
      } else if (lastDigit === 1) {
        ageText = `${age} год`;
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        ageText = `${age} года`;
      } else {
        ageText = `${age} лет`;
      }

      return ageText;
    };

    const handleBirthDateChange = (index, value) => {
      const age = calculateAge(value);
      handleParticipatorChange(index, "birthDate", value);
      handleParticipatorChange(index, "age", age);
    };

    const addParticipator = () => {
      setParticipators([
        ...participators,
        { name: "", birthDate: "", age: "", restrictions: "" },
      ]);
    };

    const addAttendant = () => {
      setAttendants([...attendants, ""]);
    };

    const validateForm = () => {
      const errors = [];

      const requiredFields = {
        squadName: "Название команды",
        organizationAddres: "Адрес командирующей организации",
        organizationPhone: "Телефон командирующей организации",
        ageGroup: "Возрастная группа команды",
        squadAgentName: "ФИО представителя команды",
        squadAgentPhone: "Телефон представителя команды",
      };

      Object.entries(requiredFields).forEach(([field, label]) => {
        if (!formData[field]) {
          errors.push(label);
        }
      });

      participators.forEach((participator, index) => {
        if (!participator.name) {
          errors.push(`ФИО участника ${index + 1}`);
        }
        if (!participator.birthDate) {
          errors.push(`Дата рождения участника ${index + 1}`);
        } else if (new Date(participator.birthDate) > new Date()) {
          errors.push(`Дата рождения участника ${index + 1} в будущем`);
        }
      });

      attendants.forEach((attendant, index) => {
        if (!attendant) {
          errors.push(`ФИО сопровождающего ${index + 1}`);
        }
      });

      return errors;
    };

    const submitForm = (event) => {
      event.preventDefault();
      setError(null);

      const errors = validateForm();
      if (errors.length > 0) {
        setError(
          `Следующие поля не заполнены или содержат ошибки: ${errors.join("\n")}`,
        );
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
        return;
      }

      const activityRequest = {
        id: activityId,
        squadName: formData.squadName,
        organizationAddres: formData.organizationAddres,
        organizationPhone: formData.organizationPhone,
        ageGroup: formData.ageGroup,
        participators: participators.map((p) => ({
          name: p.name,
          birthDate: p.birthDate,
          age: p.age,
          restrictions: p.restrictions,
        })),
        squadAgentName: formData.squadAgentName,
        squadAgentPhone: formData.squadAgentPhone,
        attendants: attendants.filter((a) => a.trim() !== ""),
      };

      const success = UsersStore.addActivityRequest(activityRequest);
      if (success) {
        setIsSubmitted(true);
      } else {
        setError("Ошибка при сохранении заявки");
        formRef.current?.scrollIntoView(SCROLL_SETTINGS);
      }
    };

    const successMessage = isSubmitted && (
      <MessageBlock type={MBT_SUCCESS}>
        <p>Заявка успешно подана!</p>
      </MessageBlock>
    );

    const errorMessage = error && (
      <MessageBlock type={MBT_ERROR}>
        <p>{error}</p>
      </MessageBlock>
    );

    const backLinkUrl = `/cabinet/activities/${activityId}`;

    return (
      <div className="activity-request" ref={formRef}>
        <h1 className="activity-request__header">Заявка</h1>
        <div className="activity-request__content">
          <Link to={backLinkUrl} className="activity-request__back-link">
            <Arrow />
          </Link>
          <form
            className="activity-request__form"
            id="activityRequestForm"
            onSubmit={submitForm}
          >
            {successMessage}
            {errorMessage}
            <span className="activity-request__caption">
              Основная информация:
            </span>
            <LabeledInput
              required
              label="Название команды"
              id="squadName"
              value={formData.squadName}
              onChange={handleInputChange}
              className="activity-request__shorter-input"
              disabled={isSubmitted}
            />
            <LabeledInput
              required
              label="Адрес командирующей организации"
              id="organizationAddres"
              value={formData.organizationAddres}
              onChange={handleInputChange}
              className="activity-request__shorter-input"
              disabled={isSubmitted}
            />
            <LabeledInput
              required
              label="Телефон командирующей организации"
              id="organizationPhone"
              value={formData.organizationPhone}
              onChange={handleInputChange}
              className="activity-request__shorter-input"
              disabled={isSubmitted}
            />
            <LabeledInput
              required
              label="Возрастная группа команды"
              id="ageGroup"
              value={formData.ageGroup}
              onChange={handleInputChange}
              className="activity-request__shorter-input"
              disabled={isSubmitted}
            />
            <span className="activity-request__caption">
              Участники команды:
            </span>
            <div className="activity-request__participators-container">
              <ul className="activity-request__participators-list">
                {participators.map((participator, index) => (
                  <li
                    key={index}
                    className="activity-request__participator-item"
                  >
                    <LabeledInput
                      required
                      label="ФИО участника"
                      id={`participator${index}_name`}
                      value={participator.name}
                      onChange={(e) =>
                        handleParticipatorChange(index, "name", e.target.value)
                      }
                      className="activity-request__participator-name"
                      disabled={isSubmitted}
                    />
                    <LabeledInput
                      required
                      label="Дата рождения"
                      type="date"
                      id={`participator${index}_birthDate`}
                      value={participator.birthDate}
                      onChange={(e) =>
                        handleBirthDateChange(index, e.target.value)
                      }
                      className="activity-request__participator-birth-date"
                      disabled={isSubmitted}
                    />
                    <output
                      htmlFor={`participator${index}_birthDate`}
                      form="activityRequestForm"
                      name={`Возраст участника ${index + 1}`}
                      className="activity-request__participator-age"
                    >
                      {participator.age}
                    </output>
                    <LabeledInput
                      label="Ограничения здоровья"
                      id={`participator${index}_restrictions`}
                      value={participator.restrictions}
                      onChange={(e) =>
                        handleParticipatorChange(
                          index,
                          "restrictions",
                          e.target.value,
                        )
                      }
                      className="activity-request__participator-restrictions"
                      disabled={isSubmitted}
                    />
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="activity-request__button-add"
                onClick={addParticipator}
                disabled={isSubmitted}
              >
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
                value={formData.squadAgentName}
                onChange={handleInputChange}
                className="activity-request__squad-agent-name"
                disabled={isSubmitted}
              />
              <LabeledInput
                required
                label="Телефон"
                id="squadAgentPhone"
                value={formData.squadAgentPhone}
                onChange={handleInputChange}
                className="activity-request__squad-agent-phone"
                disabled={isSubmitted}
              />
            </div>
            <span className="activity-request__caption">
              Список сопровождающих:
            </span>
            <div className="activity-request__attendants-container">
              <ul className="activity-request__attendants-list">
                {attendants.map((attendant, index) => (
                  <li key={index} className="activity-request__attendant-item">
                    <LabeledInput
                      required
                      label="ФИО"
                      id={`attendant${index}`}
                      value={attendant}
                      onChange={(e) =>
                        handleAttendantChange(index, e.target.value)
                      }
                      disabled={isSubmitted}
                    />
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="activity-request__button-add"
                onClick={addAttendant}
                disabled={isSubmitted}
              >
                +
              </button>
            </div>
            <button
              type="submit"
              className="activity-request__button-submit"
              disabled={isSubmitted}
            >
              Подать заявку
            </button>
          </form>
        </div>
      </div>
    );
  }),
);

export default ActivityRequestForm;

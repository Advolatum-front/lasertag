import { Link } from "react-router-dom";

import { stripYear, parseDate } from "../../utils/date/functions";
import ActivityRequestStatus from "../../components/ActivityRequestStatus";
import NoData from "../../components/NoData";

import "./index.css";

const ACTIVITY_AVAIBLE_STATUS = 4;
const ACTIVITY_PENDING_STATUS = 3;

const CabinetActivitiesTable = ({ activitiesData, listHeader }) => {
  const cabinetActivityItems = activitiesData.map((activity) => {
    const { id, date, status, title, description } = activity;
    const urlLink = `/cabinet/activities/${id}`;
    const visibleDate = stripYear(date);

    const currentDate = new Date();
    const activityDate = parseDate(date);

    const notProcessedActivityIsOver =
      (status === ACTIVITY_AVAIBLE_STATUS ||
        status === ACTIVITY_PENDING_STATUS) &&
      activityDate < currentDate;

    const statusBlock = notProcessedActivityIsOver ? (
      <span className="cabinet-activities__activity-status">Завершено</span>
    ) : (
      <ActivityRequestStatus
        code={status}
        className="cabinet-activities__activity-status"
        activityId={id}
      />
    );

    return (
      <li className="cabinet-activities__activity-item" key={id}>
        <div className="cabinet-activities__activity-date">{visibleDate}</div>
        <Link to={urlLink} className="cabinet-activities__activity-name">
          {title}
        </Link>
        <div className="cabinet-activities__activity-description">
          {description}
        </div>
        {statusBlock}
      </li>
    );
  });

  return (
    <div className="cabinet-activities__content">
      <h2 className="cabinet-activities__list-category">Прошедшие</h2>
      <div className="cabinet-activities__activities-list-conainer">
        <ul className="cabinet-activities__captions-list">
          <li className="cabinet-activities__caption-item date">Дата</li>
          <li className="cabinet-activities__caption-item name">
            Наименование
          </li>
          <li className="cabinet-activities__caption-item description">
            Описание
          </li>
          <li className="cabinet-activities__caption-item status">
            Статус заявки
          </li>
        </ul>
        <ul className="cabinet-activities__activities-list">
          {cabinetActivityItems}
        </ul>
      </div>
    </div>
  );
};

export default CabinetActivitiesTable;

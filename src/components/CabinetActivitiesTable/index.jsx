import { Link } from "react-router-dom";

import { parseDate } from "../../utils/date/functions";
import ActivityRequestStatus from "../../components/ActivityRequestStatus";
import NoData from "../../components/NoData";

import "./index.css";

const ACTIVITY_AVAIBLE_STATUS = 4;
const ACTIVITY_PENDING_STATUS = 3;

const TABLE_CAPTIONS_LIST = (
  <ul className="cabinet-activities-table__captions-list">
    <li className="cabinet-activities-table__caption-item date">Дата</li>
    <li className="cabinet-activities-table__caption-item name">
      Наименование
    </li>
    <li className="cabinet-activities-table__caption-item description">
      Описание
    </li>
    <li className="cabinet-activities-table__caption-item status">
      Статус заявки
    </li>
  </ul>
);

const CabinetActivitiesTable = ({ activitiesData, tableHeader }) => {
  const cabinetActivityItems = activitiesData.map((activity) => {
    const { id, date, status, title, description } = activity;
    const urlLink = `/cabinet/activities/${id}`;

    const currentDate = new Date();
    const activityDate = parseDate(date);

    const notProcessedActivityIsOver =
      (status === ACTIVITY_AVAIBLE_STATUS ||
        status === ACTIVITY_PENDING_STATUS) &&
      activityDate < currentDate;

    const statusBlock = notProcessedActivityIsOver ? (
      <span className="cabinet-activities-table__status-expired">
        Завершено
      </span>
    ) : (
      <ActivityRequestStatus
        code={status}
        className="cabinet-activities-table__activity-status"
        activityId={id}
      />
    );

    return (
      <li className="cabinet-activities-table__activity-item" key={id}>
        <div className="cabinet-activities-table__activity-date">{date}</div>
        <Link to={urlLink} className="cabinet-activities-table__activity-name">
          {title}
        </Link>
        <div className="cabinet-activities-table__activity-description">
          {description}
        </div>
        {statusBlock}
      </li>
    );
  });

  const count = activitiesData.length;
  const visibleTableHeader = `${tableHeader} (${count})`;
  const tableBody =
    count > 0 ? (
      <div className="cabinet-activities-table__activities-list-conainer">
        {TABLE_CAPTIONS_LIST}
        <ul className="cabinet-activities-table__activities-list">
          {cabinetActivityItems}
        </ul>
      </div>
    ) : (
      <NoData />
    );

  return (
    <div className="cabinet-activities-table__content">
      <h2 className="cabinet-activities-table__list-category">
        {visibleTableHeader}
      </h2>
      {tableBody}
    </div>
  );
};

export default CabinetActivitiesTable;

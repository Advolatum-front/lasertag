import { Link } from "react-router-dom";

import "./index.css";

import {
  ARS_NO_STATUS,
  ARS_APPROVED,
  ARS_DECLINED,
  ARS_PENDING,
  ARS_AVAIBLE,
} from "../../utils/activities-statuses";

const ARS_DICT = new Map();
ARS_DICT.set(ARS_NO_STATUS, { caption: "Нет статуса", className: "no-status" })
  .set(ARS_APPROVED, { caption: "Одобрена", className: "approved" })
  .set(ARS_DECLINED, { caption: "Отклонена", className: "declined" })
  .set(ARS_PENDING, { caption: "Подана", className: "pending" })
  .set(ARS_AVAIBLE, { caption: "Подать заявку", className: "avaible" });

const ActivityRequestStatus = (props) => {
  const { code, className = "", activityId } = props;
  const { className: statusBlockClassName, caption } = ARS_DICT.get(code);

  const sendRequestURL = `/cabinet/activities/${activityId}/request`;

  const statusClassName =
    `activity-request-status ${statusBlockClassName} ${className}`.trim();

  const statusBlock =
    code === ARS_AVAIBLE ? (
      <Link to={sendRequestURL} className={statusClassName}>
        {caption}
      </Link>
    ) : (
      <span className={statusClassName}>{caption}</span>
    );

  return statusBlock;
};

export default ActivityRequestStatus;

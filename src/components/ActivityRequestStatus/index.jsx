import { Link } from "react-router-dom";

import "./index.css";

import { ACTIVITIY_REQUEST_STATUSES } from "../../utils/activities-statuses";

const ACTIVITY_IS_AVAIBLE = 4;

const ActivityRequestStatus = (props) => {
  const { code, className = "", activityId } = props;
  const statusBlockClassName = ACTIVITIY_REQUEST_STATUSES[code].className;
  const caption = ACTIVITIY_REQUEST_STATUSES[code].caption;
  const sendRequestURL = `/cabinet/activities/${activityId}/request`;

  const statusClassName =
    `activity-request-status ${statusBlockClassName} ${className}`.trim();

  const statusBlock =
    code === ACTIVITY_IS_AVAIBLE ? (
      <Link to={sendRequestURL} className={statusClassName}>
        {caption}
      </Link>
    ) : (
      <span className={statusClassName}>{caption}</span>
    );

  return statusBlock;
};

export default ActivityRequestStatus;

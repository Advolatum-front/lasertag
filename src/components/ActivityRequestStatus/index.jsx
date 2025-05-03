import "./index.css";

const ActivityRequestStatus = (props) => {
  const { statusCode, className = "" } = props;
  const statusClassName = `activity-request-status ${className}`.trim();

  return <span className={statusClassName}>Статус</span>;
};

export default ActivityRequestStatus;

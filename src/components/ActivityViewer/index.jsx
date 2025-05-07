import { Link } from "react-router-dom";

import { parseDate } from "../../utils/date/functions";
import ActivityRequestStatus from "../../components/ActivityRequestStatus";

import { ReactComponent as Arrow } from "../../svg/arrow.svg";

import "./index.css";

const ActivityViewer = (props) => {
  const {
    id,
    date,
    title,
    fullTextLines,
    status,
    prevNextIds,
    goBackLinkURL,
    isAuthenticated,
  } = props;

  const [prevURL, nextURL] = prevNextIds;

  const fullTextParagraphs = fullTextLines.map((line, index) => (
    <p key={index}>{line}</p>
  ));

  const currentDate = new Date();
  const activityDate = parseDate(date);

  const linkToLogin = (
    <Link to="/login" className="activity-viewer__link-to-login">
      Авторизуйтесь
    </Link>
  );

  const pastClass = "activity-viewer__past-activity-caption";
  const pastActivityCaption = <span className={pastClass}>Завершено</span>;
  const statusOrLogin = isAuthenticated ? (
    <ActivityRequestStatus
      code={status}
      className="activity-viewer__avtivity-status"
      activityId={id}
    />
  ) : (
    linkToLogin
  );

  const sendRequestBlock =
    activityDate < currentDate ? pastActivityCaption : statusOrLogin;

  return (
    <div className="av-wrapper">
      <div className="viewer-first-col">
        <Link to={goBackLinkURL} className="av-link-go-back">
          <Arrow />
        </Link>
        <Link to={prevURL} className="av-link-prev" />
      </div>

      <div className="viewer-second-col">
        <h1 className="activity-viewer__header">{title}</h1>
        <div className="activity-viewer__description">{fullTextParagraphs}</div>
        <div className="activity-viewer__bottom-part">
          <div className="activity-viewer__date">{date}</div>
          {sendRequestBlock}
        </div>
      </div>

      <div className="viewer-third-col">
        <Link to={nextURL} className="av-link-next" />
      </div>
    </div>
  );
};

export default ActivityViewer;

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
    borderAround = false,
    prevNextIds,
    goBackLinkURL,
    isAuthenticated,
  } = props;

  const activityViewerClassName = borderAround
    ? "activity-viewer border-around"
    : "activity-viewer";

  const goBackLinkClassName = borderAround
    ? "activity-viewer__link-go-back border-around"
    : "activity-viewer__link-go-back";

  const [prevURL, nextURL] = prevNextIds.map((id) => `/activities/${id}`);
  const prevLink = (
    <Link to={prevURL} className="activity-viewer__nav-link prev" />
  );
  const nextLink = (
    <Link to={nextURL} className="activity-viewer__nav-link next" />
  );

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
  const sendRequestBlock =
    activityDate < currentDate ? (
      <span className="activity-viewer__past-activity-caption">
        Мероприятие завершено
      </span>
    ) : isAuthenticated ? (
      <ActivityRequestStatus
        code={status}
        className="activity-viewer__avtivity-status"
        activityId={id}
      />
    ) : (
      linkToLogin
    );

  return (
    <div className={activityViewerClassName}>
      <Link to={goBackLinkURL} className={goBackLinkClassName}>
        <Arrow className="activity-viewer__arrow-ico" />
      </Link>
      <h1 className="activity-viewer__header">{title}</h1>
      <div className="activity-viewer__description">{fullTextParagraphs}</div>
      <div className="activity-viewer__bottom-part">
        <div className="activity-viewer__date">{date}</div>
        {sendRequestBlock}
      </div>
      {prevLink}
      {nextLink}
    </div>
  );
};

export default ActivityViewer;

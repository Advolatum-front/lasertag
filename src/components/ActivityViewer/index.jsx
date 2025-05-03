import { Link } from "react-router-dom";

import { stripYear } from "../../utils/date/functions";

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
    navLinks = false,
    goBackLinkURL,
  } = props;

  const activityViewerClassName = borderAround
    ? "activity-viewer border-around"
    : "activity-viewer";

  const goBackLinkClassName = borderAround
    ? "activity-viewer__link-go-back border-around"
    : "activity-viewer__link-go-back";

  const prevLink = navLinks && (
    <Link to="/" className="activity-viewer__nav-link prev" />
  );
  const nextLink = navLinks && (
    <Link to="/" className="activity-viewer__nav-link next" />
  );

  const fullTextParagraphs = fullTextLines.map((line, index) => (
    <p key={index}>{line}</p>
  ));

  const visibleDate = stripYear(date);

  return (
    <div className={activityViewerClassName}>
      <Link to={goBackLinkURL} className={goBackLinkClassName}>
        <Arrow className="activity-viewer__arrow-ico" />
      </Link>
      <h1 className="activity-viewer__header">{title}</h1>
      <div className="activity-viewer__description">{fullTextParagraphs}</div>
      <div className="activity-viewer__bottom-part">
        <div className="activity-viewer__date">{visibleDate}</div>
        <Link to="/" className="activity-viewer__link-send-request">
          Подать заявку
        </Link>
      </div>
      {prevLink}
      {nextLink}
    </div>
  );
};

export default ActivityViewer;

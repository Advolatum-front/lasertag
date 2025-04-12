import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../svg/arrow.svg";

import "./index.css";

const ActivityViewer = (props) => {
  const {
    goBackLink,
    header,
    description,
    date,
    sendRequestLink,
    borderAround,
    navLinks = false,
    prevLinkUrl,
    nextLinkUrl,
  } = props;

  const activityViewerClassName = borderAround
    ? "activity-viewer border-around"
    : "activity-viewer";

  const goBackLinkClassName = borderAround
    ? "activity-viewer__link-go-back border-around"
    : "activity-viewer__link-go-back";

  const prevLink = navLinks && (
    <Link to={prevLinkUrl} className="activity-viewer__nav-link prev"></Link>
  );
  const nextLink = navLinks && (
    <Link to={nextLinkUrl} className="activity-viewer__nav-link next"></Link>
  );

  return (
    <div className={activityViewerClassName}>
      <Link to={goBackLink} className={goBackLinkClassName}>
        <Arrow className="activity-viewer__arrow-ico" />
      </Link>
      <h1 className="activity-viewer__header">{header}</h1>
      <div className="activity-viewer__description">{description}</div>
      <div className="activity-viewer__bottom-part">
        <div className="activity-viewer__date">{date}</div>
        <Link
          to={sendRequestLink}
          className="activity-viewer__link-send-request"
        >
          Подать заявку
        </Link>
      </div>
      {prevLink}
      {nextLink}
    </div>
  );
};

export default ActivityViewer;

import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../svg/arrow.svg";

import "./index.css";

const ActivityViewer = (props) => {
  const { goBackLink, header, description, date, sendRequestLink } = props;

  return (
    <div className="activity-viewer">
      <Link to={goBackLink} className="activity-viewer__link-go-back">
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
    </div>
  );
};

export default ActivityViewer;

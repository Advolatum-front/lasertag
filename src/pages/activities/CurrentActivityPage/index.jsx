import { Link } from "react-router-dom";

// import { ReactComponent as Arrow } from "../../../svg/arrow.svg";

import ActivityViewer from "../../../components/ActivityViewer";

import "./index.css";

const CurrentActivityPage = () => {
  return (
    <section className="current-activity">
      <ActivityViewer />
    </section>
  );
};

export default CurrentActivityPage;

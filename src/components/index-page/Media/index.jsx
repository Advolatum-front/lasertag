import { Link } from "react-router-dom";

import "./index.css";

const Media = () => {
  return (
    <article className="media">
      <Link to="/gallery" className="media__link">
        <span>Все медиа</span>
      </Link>
    </article>
  );
};

export default Media;

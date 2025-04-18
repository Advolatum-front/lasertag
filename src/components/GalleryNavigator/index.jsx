import { Link } from "react-router-dom";

import "./index.css";

const GalleryNavigator = (props) => {
  const { className } = props;

  const galleryNavigatorClassName = className
    ? `gallery-navigator ${className}`
    : `gallery-navigator`;

  return (
    <div className={galleryNavigatorClassName}>
      <ul className="gallery-navigator__list">
        <li className="gallery-navigator__list-item">
          <span className="gallery-navigator__link-active">Фото</span>
        </li>
        <li className="gallery-navigator__list-item">
          <Link to="/" className="gallery-navigator__link">
            Видео
          </Link>
        </li>
        <li className="gallery-navigator__list-item">
          <Link to="/" className="gallery-navigator__link">
            Избранное
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GalleryNavigator;

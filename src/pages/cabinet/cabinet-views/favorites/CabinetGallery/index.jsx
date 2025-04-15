import { Link } from "react-router-dom";

import "./index.css";

const CabinetGallery = () => {
  return (
    <div className="cabinet-gallery">
      <h1 className="cabinet-gallery__header">Избранное</h1>
      <ul className="cabinet-gallery__media-list">
        <li className="cabinet-gallery__media-list-item">
          <Link to="/" className="cabinet-gallery__link">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="cabinet-gallery__photo"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CabinetGallery;

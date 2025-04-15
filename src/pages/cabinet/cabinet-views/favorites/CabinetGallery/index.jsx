import { Link } from "react-router-dom";

import "./index.css";

const CabinetGallery = () => {
  return (
    <div className="cabinet-gallery">
      <h1 className="cabinet-gallery__header">Избранное</h1>
      <ul className="cabinet-gallery__media-list">
        <li className="cabinet-gallery__media-list-item">
          <Link className="cabinet-gallery__link">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="cabinet-gallery__photo"
            />
          </Link>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <Link className="cabinet-gallery__link">
            <video
              className="gallery-slider__picture"
              className="cabinet-gallery__video"
            >
              <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
            </video>
          </Link>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <Link className="cabinet-gallery__link">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.webp"
              alt=""
              className="cabinet-gallery__photo"
            />
          </Link>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <Link className="cabinet-gallery__link">
            <video
              className="gallery-slider__picture"
              className="cabinet-gallery__video"
            >
              <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
            </video>
          </Link>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <Link className="cabinet-gallery__link">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.webp"
              alt=""
              className="cabinet-gallery__photo"
            />
          </Link>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <Link className="cabinet-gallery__link">
            <video
              className="gallery-slider__picture"
              className="cabinet-gallery__video"
            >
              <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
            </video>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CabinetGallery;

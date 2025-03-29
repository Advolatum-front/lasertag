import { Link } from "react-router-dom";

import GalleryNavigator from "../../components/GalleryNavigator";

import "./index.css";

const AlbumSelector = () => {
  return (
    <>
      <GalleryNavigator />
      <ul className="albums-list">
        <li className="albums-list__item">
          <Link className="albums-list__cover-container">
            <img
              src="/img/gallery/album-selector/photo/cover-1.webp"
              alt=""
              className="albums-list__cover"
            />
          </Link>
          <Link className="albums-list__link">Фото с региона</Link>
        </li>
        <li className="albums-list__item">
          <Link className="albums-list__cover-container">
            <img
              src="/img/gallery/album-selector/photo/cover-1.webp"
              alt=""
              className="albums-list__cover"
            />
          </Link>
          <Link className="albums-list__link">Фото с региона</Link>
        </li>
        <li className="albums-list__item">
          <Link className="albums-list__cover-container">
            <img
              src="/img/gallery/album-selector/photo/cover-1.webp"
              alt=""
              className="albums-list__cover"
            />
          </Link>
          <Link className="albums-list__link">Фото с региона</Link>
        </li>
      </ul>
    </>
  );
};

export default AlbumSelector;

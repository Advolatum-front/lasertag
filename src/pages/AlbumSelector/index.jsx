import { Link } from "react-router-dom";

// import "./index.css";

const AlbumSelector = () => {
  return (
    <>
      <div className="gallery-navigator">
        <ul className="gallery-navigator__list">
          <li className="gallery-navigator__list-item">
            <Link className="gallery-navigator__link">Фото</Link>
          </li>
          <li className="gallery-navigator__list-item">
            <Link className="gallery-navigator__link">Видео</Link>
          </li>
          <li className="gallery-navigator__list-item">
            <Link className="gallery-navigator__link">Избранное</Link>
          </li>
        </ul>
      </div>

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

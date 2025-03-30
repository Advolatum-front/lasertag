import { Link } from "react-router-dom";

import GalleryNavigator from "../../components/GalleryNavigator";

import "./index.css";

const AlbumContent = () => {
  return (
    <>
      <GalleryNavigator className="gallery-navigator-mb" />
      <Link to="/" className="back-to-albums-link">
        Фото с региона
      </Link>
      <ul className="thumbnail-list">
        <li className="thumbnail-list__list-item">
          <Link to="/" className="thumbnail-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="thumbnail-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnail-list__list-item">
          <Link to="/" className="thumbnail-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.jpg"
              alt=""
              className="thumbnail-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnail-list__list-item">
          <Link to="/" className="thumbnail-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.jpg"
              alt=""
              className="thumbnail-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnail-list__list-item">
          <Link to="/" className="thumbnail-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-4.jpg"
              alt=""
              className="thumbnail-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnail-list__list-item">
          <Link to="/" className="thumbnail-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-5.jpg"
              alt=""
              className="thumbnail-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnail-list__list-item">
          <Link to="/" className="thumbnail-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-6.jpg"
              alt=""
              className="thumbnail-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnail-list__list-item">
          <Link to="/" className="thumbnail-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-7.jpg"
              alt=""
              className="thumbnail-list__thumbnail"
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AlbumContent;

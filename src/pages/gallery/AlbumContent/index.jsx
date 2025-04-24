import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../../svg/arrow.svg";

import GalleryNavigator from "../../../components/GalleryNavigator";

import "./index.css";

const AlbumContent = () => {
  return (
    <>
      <GalleryNavigator className="gallery-navigator-mb" />
      <Link to="/" className="back-to-albums-link">
        <Arrow className="back-to-albums-link__arrow" />
        <span>Фото с региона:</span>
      </Link>
      <ul className="thumbnails-list">
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-4.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-5.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-6.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-7.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-4.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-5.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-6.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-7.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-4.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-5.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-6.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-7.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AlbumContent;

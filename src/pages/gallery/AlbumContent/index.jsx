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
            <video className="thumbnails-list__thumbnail">
              <source src="/gallery/video/region1/promo.mp4" type="video/mp4" />
            </video>
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/2.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/3.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/4.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/5.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/6.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/7.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/1.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/2.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/3.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/4.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/5.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/6.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/7.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/1.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/2.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/3.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/4.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/5.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/6.webp"
              alt=""
              className="thumbnails-list__thumbnail"
            />
          </Link>
        </li>
        <li className="thumbnails-list__list-item">
          <Link to="/" className="thumbnails-list__thumbnail-container">
            <img
              src="/gallery/photo/region1/7.webp"
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

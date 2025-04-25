import { Link } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as Cross } from "../../../../../svg/cross-ico.svg";

import {
  GF_ALL,
  GF_PHOTO,
  GF_VIDEO,
} from "../../../../../utils/gallery-filter-state.js";

import "./index.css";

const CabinetGallery = () => {
  const [filterState, setFilterState] = useState(GF_ALL);

  const filterData = [
    {
      caption: "Все",
      value: GF_ALL,
    },
    {
      caption: "Фото",
      value: GF_PHOTO,
    },
    {
      caption: "Видео",
      value: GF_VIDEO,
    },
  ];

  const filterListItems = filterData.map((item, index) => {
    const { caption, value } = item;

    return (
      <li className="cabinet-gallery__list-item" key={index}>
        <input
          type="radio"
          name="activies-filter"
          id={value}
          value={value}
          className="cabinet-gallery__filter-radio"
          onChange={() => setFilterState(value)}
          checked={filterState === value}
        />
        <label className="cabinet-gallery__option" htmlFor={value}>
          {caption}
        </label>
      </li>
    );
  });

  return (
    <div className="cabinet-gallery">
      <h1 className="cabinet-gallery__header">Избранное</h1>
      <ul className="cabinet-gallery__filter">{filterListItems}</ul>
      <ul className="elements-list">
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <video className="elements-list__element">
              <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
            </video>
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-4.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-5.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-6.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-7.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-4.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-5.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-6.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-7.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-2.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-3.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-4.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-5.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-6.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
        <li className="elements-list__list-item">
          <Link to="/" className="elements-list__element-container">
            <img
              src="/img/gallery/photo/albums/1/thumbnails/thumbnail-7.webp"
              alt=""
              className="elements-list__element"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CabinetGallery;

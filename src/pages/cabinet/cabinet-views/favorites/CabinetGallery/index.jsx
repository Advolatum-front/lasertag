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
      caption: "Мои",
      value: GF_PHOTO,
    },
    {
      caption: "Доступные",
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
      <div className="cabinet-gallery__filter-wrapper">
        <ul className="cabinet-gallery__filter">{filterListItems}</ul>
      </div>
      <ul className="cabinet-gallery__media-list">
        <li className="cabinet-gallery__media-list-item">
          <img
            src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
            alt=""
            className="cabinet-gallery__element"
          />
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <img
            src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
            alt=""
            className="cabinet-gallery__element"
          />
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <img
            src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
            alt=""
            className="cabinet-gallery__element"
          />
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <img
            src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
            alt=""
            className="cabinet-gallery__element"
          />
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <img
            src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
            alt=""
            className="cabinet-gallery__element"
          />
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <img
            src="/img/gallery/photo/albums/1/thumbnails/thumbnail-1.webp"
            alt=""
            className="cabinet-gallery__element"
          />
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
        <li className="cabinet-gallery__media-list-item">
          <video className="cabinet-gallery__element">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <Link to="/" className="cabinet-gallery__link" />
          <button className="cabinet-gallery__button-unlike">
            <Cross className="cabinet-gallery__cross-ico" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CabinetGallery;

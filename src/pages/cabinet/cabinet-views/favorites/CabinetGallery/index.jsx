import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import NoData from "../../../../../components/NoData";

import { ReactComponent as Cross } from "../../../../../svg/cross-ico.svg";

import { useDocumentTitle } from "../../../../../hooks/useDocumentTitle";

import {
  GF_ALL,
  GF_PHOTO,
  GF_VIDEO,
} from "../../../../../utils/gallery-filter-state.js";

import "./index.css";

const FILTER_DICT = new Map();
FILTER_DICT.set(GF_ALL, "all").set(GF_PHOTO, "photo").set(GF_VIDEO, "video");

const CabinetGallery = inject("UsersStore")(
  observer(({ UsersStore }) => {
    const { currentUser, removeMediaFromFavorites } = UsersStore;
    useDocumentTitle("Личный кабинет, избранное");

    const handleButtonRemoveClick = (itemId) => {
      removeMediaFromFavorites(itemId);
    };

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

    const dataArray = (currentUser?.favorites || []).filter((item) => {
      if (filterState === GF_ALL) {
        return true;
      } else {
        return item.type === FILTER_DICT.get(filterState);
      }
    });

    if (dataArray.length === 0) {
      return (
        <div className="cabinet-gallery">
          <h1 className="cabinet-gallery__header">Избранное</h1>
          <ul className="cabinet-gallery__filter">{filterListItems}</ul>
          <NoData />
        </div>
      );
    }

    const cabinetGalleryListItems = dataArray.map((item) => {
      const { id, type, src } = item;
      const filterValue = FILTER_DICT.get(filterState);
      const urlLink = `/cabinet/favorites/${filterValue}/${id}`;

      const linkContent =
        type === "photo" ? (
          <img src={src} alt="" className="elements-list__element" />
        ) : (
          <video className="elements-list__element">
            <source src={src} type="video/mp4" />
          </video>
        );

      return (
        <li className="elements-list__list-item" key={id}>
          <Link to={urlLink} className="elements-list__element-container">
            {linkContent}
          </Link>
          <button
            className="elements-list__button-remove"
            onClick={() => handleButtonRemoveClick(id)}
          >
            <Cross className="elements-list__cross-ico" />
          </button>
        </li>
      );
    });

    return (
      <div className="cabinet-gallery">
        <h1 className="cabinet-gallery__header">Избранное</h1>
        <ul className="cabinet-gallery__filter">{filterListItems}</ul>
        <ul className="elements-list">{cabinetGalleryListItems}</ul>
      </div>
    );
  }),
);

export default CabinetGallery;

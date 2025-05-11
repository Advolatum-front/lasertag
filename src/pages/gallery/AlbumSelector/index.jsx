import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import GalleryNavigator from "../../../components/GalleryNavigator";

import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import "./index.css";

const AlbumSelector = inject("GalleryStore")(
  observer(({ GalleryStore }) => {
    useDocumentTitle("Галерея, альбомы");

    return (
      <>
        <GalleryNavigator className="gallery-navigator-mb" />
        <ul className="albums-list">
          <li className="albums-list__item">
            <Link className="albums-list__cover-container">
              <img
                src="/img/gallery/album-selector/photo/cover-1.webp"
                alt=""
                className="albums-list__cover"
              />
            </Link>
            <Link className="albums-list__link link-1">Фото с региона</Link>
          </li>
          <li className="albums-list__item">
            <Link className="albums-list__cover-container">
              <img
                src="/img/gallery/album-selector/photo/cover-2.webp"
                alt=""
                className="albums-list__cover"
              />
            </Link>
            <Link className="albums-list__link link-2">Фото с области</Link>
          </li>
          <li className="albums-list__item">
            <Link className="albums-list__cover-container">
              <img
                src="/img/gallery/album-selector/photo/cover-3.webp"
                alt=""
                className="albums-list__cover"
              />
            </Link>
            <Link className="albums-list__link link-3">Фото с региона</Link>
          </li>
        </ul>
      </>
    );
  }),
);

export default AlbumSelector;

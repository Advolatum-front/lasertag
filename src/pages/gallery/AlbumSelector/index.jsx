import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Link, useLocation } from "react-router-dom";

import GalleryNavigator from "../../../components/GalleryNavigator";
import NoData from "../../../components/NoData";

import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import "./index.css";

const AlbumSelector = inject("GalleryStore")(
  observer(({ GalleryStore }) => {
    useDocumentTitle("Галерея, альбомы");

    const pathname = useLocation().pathname;
    const albumType = pathname.includes("photo") ? "photo" : "video";

    const { albumsList, fetchAlbumsByType } = GalleryStore;

    useEffect(() => {
      fetchAlbumsByType(albumType);
    }, [fetchAlbumsByType, albumType]);

    if (albumsList.length === 0) {
      return (
        <>
          <GalleryNavigator className="gallery-navigator-mb" />
          <div className="albums-list-wrapper">
            <NoData />
          </div>
        </>
      );
    }

    const albumListItems = albumsList.map((album, index) => {
      const { id, title, cover } = album;
      const urlLink = `/gallery/album/${id}`;
      const albumLinkClass = `albums-list__link link-${index + 1}`;

      return (
        <li className="albums-list__item" key={id}>
          <Link to={urlLink} className="albums-list__cover-container">
            <img src={cover} alt="" className="albums-list__cover" />
          </Link>
          <Link to={urlLink} className={albumLinkClass}>
            {title}
          </Link>
        </li>
      );
    });

    return (
      <>
        <GalleryNavigator className="gallery-navigator-mb" />
        <div className="albums-list-wrapper">
          <ul className="albums-list">{albumListItems}</ul>
        </div>
      </>
    );
  }),
);

export default AlbumSelector;

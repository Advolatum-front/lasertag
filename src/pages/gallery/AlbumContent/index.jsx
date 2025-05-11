import { inject, observer } from "mobx-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import { ReactComponent as Arrow } from "../../../svg/arrow.svg";

import GalleryNavigator from "../../../components/GalleryNavigator";
import NoData from "../../../components/NoData";

import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import "./index.css";

const AlbumContent = inject("GalleryStore")(
  observer(({ GalleryStore }) => {
    const { fetchedAlbum, fetchAlbumById } = GalleryStore;
    const { albumId } = useParams();

    useEffect(() => {
      fetchAlbumById(albumId);
    }, [fetchAlbumById, albumId]);

    const albumTitle = fetchedAlbum?.title;
    useDocumentTitle(albumTitle || "");

    if (fetchedAlbum === null) {
      return (
        <>
          <GalleryNavigator className="gallery-navigator-mb" />
          <div className="album-content-wrapper">
            <NoData />
          </div>
        </>
      );
    }

    const thumnbnailList = fetchedAlbum.items.map((item) => {
      const { id, type, src } = item;
      const linkContent =
        type === "photo" ? (
          <img src={src} alt="" className="thumbnails-list__thumbnail" />
        ) : (
          <video className="thumbnails-list__thumbnail">
            <source src={src} type="video/mp4" />
          </video>
        );

      return (
        <li className="thumbnails-list__list-item" key={id}>
          <Link to="/" className="thumbnails-list__thumbnail-container">
            {linkContent}
          </Link>
        </li>
      );
    });

    const backLink = `/gallery/${fetchedAlbum.type}`;

    return (
      <>
        <GalleryNavigator className="gallery-navigator-mb" />
        <Link to={backLink} className="back-to-albums-link">
          <Arrow className="back-to-albums-link__arrow" />
          <span>{`${albumTitle}:`}</span>
        </Link>
        <div className="album-content-wrapper">
          <ul className="thumbnails-list">{thumnbnailList}</ul>
        </div>
      </>
    );
  }),
);

export default AlbumContent;

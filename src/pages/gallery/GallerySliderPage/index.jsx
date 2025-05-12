import { inject, observer } from "mobx-react";
import { useRef, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

import { ReactComponent as Heart } from "../../../svg/heart-ico.svg";
import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import GalleryNavigator from "../../../components/GalleryNavigator";
import NoData from "../../../components/NoData";
import MessageBlock from "../../../components/MessageBlock";

import "swiper/css";
import "swiper/css/navigation";

import {
  MBT_NOTIFICATION,
  MBT_ERROR,
} from "../../../utils/message-block-types";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import "./index.css";

const GallerySliderPage = inject(
  "GalleryStore",
  "UsersStore",
)(
  observer(({ GalleryStore, UsersStore }) => {
    const { fetchedAlbum, fetchAlbumById } = GalleryStore;
    const {
      currentUser,
      isAuthenticated,
      addMediaToFavorites,
      removeMediaFromFavorites,
    } = UsersStore;

    const { albumId, startFrom } = useParams();

    const location = useLocation().pathname;
    const isFavoritePage = location.endsWith("favorites");
    const documentTitle = isFavoritePage
      ? "Избранное"
      : "Галерея, просмотр альбома";

    useDocumentTitle(documentTitle);

    useEffect(() => {
      if (!isFavoritePage) {
        fetchAlbumById(albumId);
      }
    }, [fetchAlbumById, albumId, isFavoritePage]);

    const arrayToDisplay = isFavoritePage
      ? currentUser?.favorites || []
      : fetchedAlbum?.items || [];

    const handleButtonLikeClick = (itemObj, isLiked) => {
      const { id: itemId } = itemObj;

      if (isLiked) {
        removeMediaFromFavorites(itemId);
      } else {
        addMediaToFavorites(itemObj);
      }
    };

    const refs = useRef([]);

    const addToRefs = (el) => {
      if (el && !refs.current.includes(el)) {
        refs.current.push(el);
      }
    };

    if (!isAuthenticated && isFavoritePage) {
      return (
        <>
          <GalleryNavigator className="favorites__gallery-navigator-mb" />
          <div className="gallery-page-wrapper">
            <MessageBlock type={MBT_ERROR}>
              <p>
                Для просмотра этой страницы требуется{" "}
                <Link to="/login">авторизация</Link>
              </p>
            </MessageBlock>
          </div>
        </>
      );
    }

    if (arrayToDisplay.length === 0) {
      return (
        <>
          <GalleryNavigator className="favorites__gallery-navigator-mb" />
          <div className="gallery-page-wrapper">
            <NoData />
          </div>
        </>
      );
    }

    const backLinkUrl = isFavoritePage
      ? "/gallery/photo/"
      : `/gallery/album/${albumId}`;

    const swiperSlides = arrayToDisplay.map((item) => {
      const { id, type, src } = item;
      const slideContent =
        type === "photo" ? (
          <>
            <img src={src} alt="" className="gallery-slider__image-bg" />
            <img src={src} alt="" className="gallery-slider__picture" />
          </>
        ) : (
          <>
            <div className="gallery-slider__video-bg" />
            <video controls className="gallery-slider__picture" ref={addToRefs}>
              <source src={src} type="video/mp4" />
            </video>
          </>
        );

      const currUserFav = currentUser?.favorites || [];
      const itemIndex = currUserFav.findIndex((item) => item.id === id);

      const isLiked = itemIndex !== -1;
      const buttonLikeClass = isLiked
        ? "gallery-slider__button-like heart-liked"
        : "gallery-slider__button-like";

      const buttonLike = isAuthenticated && (
        <button
          className={buttonLikeClass}
          onClick={() => {
            handleButtonLikeClick(item, isLiked);
          }}
        >
          <Heart className="heart" />
        </button>
      );

      return (
        <SwiperSlide className="gallery-slider__slide" key={id}>
          {slideContent}
          <div className="gallery-slider__panel">
            {buttonLike}
            <Link to={backLinkUrl} className="gallery-slider__button-close">
              <Cross className="cross" />
            </Link>
          </div>
        </SwiperSlide>
      );
    });

    const itemIndex = fetchedAlbum.items.findIndex(
      (item) => item.id === startFrom,
    );
    const initialSlide = itemIndex !== -1 ? itemIndex : 0;

    const nonAuthorizedMessage = !isAuthenticated && (
      <MessageBlock type={MBT_NOTIFICATION}>
        <p>
          Вы неавторизованы. <Link to="/login">Авторизуйтесь</Link>, чтобы
          добавлять фотографии в избранное
        </p>
      </MessageBlock>
    );

    const isLoopModeOn = arrayToDisplay.length > 1;

    return (
      <>
        <GalleryNavigator className="favorites__gallery-navigator-mb" />
        <div className="gallery-page-wrapper">
          {nonAuthorizedMessage}
          <Swiper
            initialSlide={initialSlide}
            autoHeight={false}
            slidesPerView={1}
            spaceBetween={30}
            loop={isLoopModeOn}
            navigation={true}
            modules={[Navigation]}
            className="gallery-slider"
            onSlideChange={() => {
              refs.current.forEach((video) => {
                video.pause();
              });
            }}
          >
            {swiperSlides}
          </Swiper>
        </div>
      </>
    );
  }),
);

export default GallerySliderPage;

import { inject, observer } from "mobx-react";
import { useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { ReactComponent as Heart } from "../../../svg/heart-ico.svg";
import { ReactComponent as Cross } from "../../../svg/cross-ico.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import GalleryNavigator from "../../../components/GalleryNavigator";
import NoData from "../../../components/NoData";

import "swiper/css";
import "swiper/css/navigation";

import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import "./index.css";

const GallerySliderPage = inject(
  "GalleryStore",
  "UsersStore",
)(
  observer(({ GalleryStore, UsersStore }) => {
    const { fetchedAlbum, fetchAlbumById } = GalleryStore;
    const { albumId, startFrom } = useParams();

    useEffect(() => {
      fetchAlbumById(albumId);
    }, [fetchAlbumById, albumId]);

    const location = useLocation().pathname;
    const documentTitle = location.endsWith("favorites")
      ? "Избранное"
      : "Галерея, просмотр альбома";

    useDocumentTitle(documentTitle);

    const refs = useRef([]);

    const addToRefs = (el) => {
      if (el && !refs.current.includes(el)) {
        refs.current.push(el);
      }
    };

    if (fetchedAlbum === null) {
      return (
        <>
          <GalleryNavigator className="favorites__gallery-navigator-mb" />
          <div className="gallery-page-wrapper">
            <NoData />
          </div>
        </>
      );
    }

    return (
      <>
        <GalleryNavigator className="favorites__gallery-navigator-mb" />
        <div className="gallery-page-wrapper">
          <Swiper
            autoHeight={false}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="gallery-slider"
            onSlideChange={() => {
              refs.current.forEach((video) => {
                video.pause();
              });
            }}
          >
            <SwiperSlide className="gallery-slider__slide">
              <div className="gallery-slider__video-bg"></div>
              <video
                controls
                className="gallery-slider__picture"
                ref={addToRefs}
              >
                <source
                  src="/gallery/video/region1/promo.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="gallery-slider__panel">
                <button className="gallery-slider__button-like">
                  <Heart className="heart" />
                </button>
                <button className="gallery-slider__button-close">
                  <Cross className="cross" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="gallery-slider__slide">
              <img
                src="/gallery/photo/region1/1.webp"
                alt=""
                className="gallery-slider__image-bg"
              />
              <img
                src="/gallery/photo/region1/1.webp"
                alt=""
                className="gallery-slider__picture"
              />
              <div className="gallery-slider__panel">
                <button className="gallery-slider__button-like">
                  <Heart className="heart" />
                </button>
                <button className="gallery-slider__button-close">
                  <Cross className="cross" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="gallery-slider__slide">
              <img
                src="/gallery/photo/region1/2.webp"
                alt=""
                className="gallery-slider__image-bg"
              />
              <img
                src="/gallery/photo/region1/2.webp"
                alt=""
                className="gallery-slider__picture"
              />
              <div className="gallery-slider__panel">
                <button className="gallery-slider__button-like">
                  <Heart className="heart" />
                </button>
                <button className="gallery-slider__button-close">
                  <Cross className="cross" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="gallery-slider__slide">
              <img
                src="/gallery/photo/region1/3.webp"
                alt=""
                className="gallery-slider__image-bg"
              />
              <img
                src="/gallery/photo/region1/3.webp"
                alt=""
                className="gallery-slider__picture"
              />
              <div className="gallery-slider__panel">
                <button className="gallery-slider__button-like">
                  <Heart className="heart" />
                </button>
                <button className="gallery-slider__button-close">
                  <Cross className="cross" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="gallery-slider__slide">
              <img
                src="/gallery/photo/region1/4.webp"
                alt=""
                className="gallery-slider__image-bg"
              />
              <img
                src="/gallery/photo/region1/4.webp"
                alt=""
                className="gallery-slider__picture"
              />
              <div className="gallery-slider__panel">
                <button className="gallery-slider__button-like">
                  <Heart className="heart" />
                </button>
                <button className="gallery-slider__button-close">
                  <Cross className="cross" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="gallery-slider__slide">
              <div className="gallery-slider__video-bg"></div>
              <video
                controls
                className="gallery-slider__picture"
                ref={addToRefs}
              >
                <source src="/gallery/video/region1/tnt.mp4" type="video/mp4" />
              </video>
              <div className="gallery-slider__panel">
                <button className="gallery-slider__button-like">
                  <Heart className="heart" />
                </button>
                <button className="gallery-slider__button-close">
                  <Cross className="cross" />
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
  }),
);

export default GallerySliderPage;

// import { Link } from "react-router-dom";

import { ReactComponent as Heart } from "../../svg/heart-ico.svg";
import { ReactComponent as Cross } from "../../svg/cross-ico.svg";

// import GalleryNavigator from "../../components/GalleryNavigator";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

const GallerySliderPage = () => {
  return (
    <>
      <Swiper
        autoHeight={false}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="gallery-slider"
      >
        <SwiperSlide className="gallery-slider__slide">
          <img
            src="/img/gallery/photo/albums/1/big/photo-1.jpg"
            alt=""
            className="gallery-slider__blured-bg"
          />
          <img
            src="/img/gallery/photo/albums/1/big/photo-1.jpg"
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
            src="/img/gallery/photo/albums/1/big/photo-2.jpg"
            alt=""
            className="gallery-slider__blured-bg"
          />
          <img
            src="/img/gallery/photo/albums/1/big/photo-2.jpg"
            alt=""
            className="gallery-slider__picture"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GallerySliderPage;

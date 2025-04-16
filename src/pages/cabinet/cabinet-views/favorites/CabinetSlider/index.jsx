// import { Link } from "react-router-dom";

import { ReactComponent as Cross } from "../../../../../svg/cross-ico.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

const CabinetSlider = () => {
  return (
    <div className="cabinet-slider">
      <h1 className="cabinet-slider__header">Избранное</h1>
      <Swiper
        autoHeight={false}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="cabinet-slider"
      >
        <SwiperSlide className="cabinet-slider__slide">
          <img
            src="/img/gallery/photo/albums/1/big/photo-1.jpg"
            alt=""
            className="cabinet-slider__image-bg"
          />
          <img
            src="/img/gallery/photo/albums/1/big/photo-1.jpg"
            alt=""
            className="cabinet-slider__picture"
          />
          <div className="cabinet-slider__panel">
            <button className="cabinet-slider__button-close">
              <Cross className="cross" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cabinet-slider__slide">
          <img
            src="/img/gallery/photo/albums/1/big/photo-2.jpg"
            alt=""
            className="cabinet-slider__image-bg"
          />
          <img
            src="/img/gallery/photo/albums/1/big/photo-2.jpg"
            alt=""
            className="cabinet-slider__picture"
          />
          <div className="cabinet-slider__panel">
            <button className="cabinet-slider__button-close">
              <Cross className="cross" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cabinet-slider__slide">
          <div className="cabinet-slider__video-bg"></div>
          <video controls className="cabinet-slider__picture  ">
            <source src="/img/gallery/video/1/radio.mp4" type="video/mp4" />
          </video>
          <div className="cabinet-slider__panel">
            <button className="cabinet-slider__button-close">
              <Cross className="cross" />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CabinetSlider;

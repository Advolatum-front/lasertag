// import { Link } from "react-router-dom";

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
        modules={[Navigation]}
        className="cabinet-slider"
        navigation={{
          prevEl: ".cabinet-slider__prev",
          nextEl: ".cabinet-slider__next",
        }}
        onInit={(swiper) => {
          // Инициализация Swiper
          swiper.params.navigation.prevEl = ".cabinet-slider__prev";
          swiper.params.navigation.nextEl = ".cabinet-slider__next";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className="cabinet-slider__slide">
          <div className="cabinet-slider__video-bg"></div>
          <video controls className="cabinet-slider__picture  ">
            <source src="/gallery/video/region1/promo.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="cabinet-slider__slide">
          <img
            src="/gallery/photo/region1/1.webp"
            alt=""
            className="cabinet-slider__image-bg"
          />
          <img
            src="/gallery/photo/region1/1.webp"
            alt=""
            className="cabinet-slider__picture"
          />
        </SwiperSlide>
        <SwiperSlide className="cabinet-slider__slide">
          <img
            src="/gallery/photo/region1/2.webp"
            alt=""
            className="cabinet-slider__image-bg"
          />
          <img
            src="/gallery/photo/region1/2.webp"
            alt=""
            className="cabinet-slider__picture"
          />
        </SwiperSlide>
      </Swiper>
      <div className="custom-navigation cabinet-slider-nav">
        <button className="cabinet-slider__prev"></button>
        <button className="cabinet-slider__next"></button>
      </div>
    </div>
  );
};

export default CabinetSlider;

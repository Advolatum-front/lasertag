import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ReactComponent as Arrow } from "../../../svg/arrow.svg";

import { mediaSliderData } from "./mediaSliderData.js";

import "swiper/css";
import "./index.css";

const Media = () => {
  const slides = mediaSliderData.map((item, index) => {
    const divBgStyle = {
      backgroundImage: `url(${item})`,
    };

    return (
      <SwiperSlide className="media__slide-item" key={`media-slide_${index}`}>
        <div className="media__image-bg" style={divBgStyle} />
        <img src={item} alt="" className="media__slide-item-picture" />
      </SwiperSlide>
    );
  });

  return (
    <article className="media">
      <header className="media__header">
        <div className="media__logo"></div>
        <div className="media__link-container">
          <Link to="/gallery" className="media__link">
            <span>Все медиа</span>
          </Link>
          <div className="media__blue-bar"></div>
        </div>
      </header>
      <Swiper
        autoHeight={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="media__slider"
        onInit={(swiper) => {
          // Инициализация Swiper
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides}
      </Swiper>
      <div className="custom-navigation">
        <button className="custom-prev prev-media-img">
          <Arrow className="arrow" />
        </button>
        <button className="custom-next next-media-img">
          <Arrow className="arrow" />
        </button>
      </div>
    </article>
  );
};

export default Media;

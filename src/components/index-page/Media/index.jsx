import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./index.css";

const Media = () => {
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
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="media__slider"
      >
        <SwiperSlide className="media__slide-item">
          <img
            src="/gallery/index-slider/1.webp"
            alt=""
            className="media__image-bg"
          />
          <img
            src="/gallery/index-slider/1.webp"
            alt=""
            className="media__slide-item-picture"
          />
        </SwiperSlide>
        <SwiperSlide className="media__slide-item">
          <img
            src="/gallery/index-slider/2.webp"
            alt=""
            className="media__image-bg"
          />
          <img
            src="/gallery/index-slider/3.webp"
            alt=""
            className="media__slide-item-picture"
          />
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default Media;

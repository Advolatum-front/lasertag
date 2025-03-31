import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

const News = () => {
  return (
    <section className="news">
      <h1 className="news__header">Новости</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="news__slider"
      ></Swiper>
      <SwiperSlide className="news__news-item">
        <div className="news__news-header"></div>
        <Link className="news__news-image-container">
          <img
            src="/news/small/news-1.webp"
            alt=""
            className="news__news-image"
          />
        </Link>
        <div className="news__news-date">21.05</div>
        <div className="news__news-announce">
          С 20-21 мая прошли отборочные региональные соревнования по лазерному
          бою.
        </div>
        <Link className="news__news-link">Подробнее</Link>
      </SwiperSlide>
    </section>
  );
};

export default News;

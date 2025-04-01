import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ReactComponent as Arrow } from "../../svg/arrow.svg";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

const News = () => {
  const breakpoints = {
    960: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };

  return (
    <section className="news">
      <h1 className="news__section-header">Новости</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="news__slider"
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <div className="news__news-card">
            <div className="news__card-header">Региональные соревнования</div>
            <Link>
              <img
                src="/news/small/news-1.webp"
                alt=""
                className="news__card-image"
              />
            </Link>
            <div className="news__card-date">21.05</div>
            <div className="news__card-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link className="news__card-link">Подробнее</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__news-card">
            <div className="news__card-header">Региональные соревнования</div>
            <Link>
              <img
                src="/news/small/news-1.webp"
                alt=""
                className="news__card-image"
              />
            </Link>
            <div className="news__card-date">21.05</div>
            <div className="news__card-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link className="news__card-link">Подробнее</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__news-card">
            <div className="news__card-header">Региональные соревнования</div>
            <Link>
              <img
                src="/news/small/news-1.webp"
                alt=""
                className="news__card-image"
              />
            </Link>
            <div className="news__card-date">21.05</div>
            <div className="news__card-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link className="news__card-link">Подробнее</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__news-card">
            <div className="news__card-header">Региональные соревнования</div>
            <Link>
              <img
                src="/news/small/news-1.webp"
                alt=""
                className="news__card-image"
              />
            </Link>
            <div className="news__card-date">21.05</div>
            <div className="news__card-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link className="news__card-link">Подробнее</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__news-card">
            <div className="news__card-header">Региональные соревнования</div>
            <Link>
              <img
                src="/news/small/news-1.webp"
                alt=""
                className="news__card-image"
              />
            </Link>
            <div className="news__card-date">21.05</div>
            <div className="news__card-announce">
              С 20-21 мая прошли отборочные региональные соревнования по
              лазерному бою.
            </div>
            <Link className="news__card-link">Подробнее</Link>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-navigation">
        <button className="custom-prev">
          <Arrow className="arrow" />
        </button>
        <button className="custom-next">
          <Arrow className="arrow" />
        </button>
      </div>
    </section>
  );
};

export default News;

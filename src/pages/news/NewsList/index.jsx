import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import NoData from "../../../components/NoData";

import { ReactComponent as Arrow } from "../../../svg/arrow.svg";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

const NewsList = inject("NewsStore")(
  observer(({ NewsStore }) => {
    const { newsList, fetchNews } = NewsStore;
    useEffect(() => {
      fetchNews();
    }, [fetchNews]);

    console.log(toJS(newsList[1]?.title));

    const newsData = toJS(newsList);

    const newsCards = newsData.map((item) => {
      const { id, title, img, date, announce } = item;

      return (
        <div className="news__news-card" key={id}>
          <div className="news__card-header">{title}</div>
          <Link to="/">
            <img src={img} alt="" className="news__card-image" />
          </Link>
          <div className="news__card-date">{date}</div>
          <div className="news__card-announce">{announce}</div>
          <Link to="/" className="news__card-link">
            Подробнее
          </Link>
        </div>
      );
    });

    const slides = newsCards.map((card, index) => {
      return <SwiperSlide key={index}>{card}</SwiperSlide>;
    });

    const breakpoints = {
      960: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    };

    const pageContent =
      !newsList || newsList.length === 0 ? (
        <NoData />
      ) : (
        <>
          <div className="news__vertical-news-container">{newsCards}</div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            modules={[Navigation]}
            className="news__slider"
            breakpoints={breakpoints}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            onInit={(swiper) => {
              swiper.params.navigation.nextEl = ".custom-next";
              swiper.params.navigation.prevEl = ".custom-prev";
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {slides}
          </Swiper>
          <div className="custom-navigation">
            <button className="custom-prev prev-news">
              <Arrow className="arrow" />
            </button>
            <button className="custom-next next-news">
              <Arrow className="arrow" />
            </button>
          </div>
        </>
      );

    return (
      <section className="news">
        <h1 className="news__section-header">Новости</h1>
        {pageContent}
      </section>
    );
  }),
);

export default NewsList;

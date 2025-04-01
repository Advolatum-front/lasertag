import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ReactComponent as Arrow } from "../../svg/arrow.svg";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

const News = () => {
  const newsData = [
    {
      id: 1,
      header: "Региональные совренования",
      photo: "/news/small/news-1.webp",
      date: "21.05",
      announce:
        "С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.",
      link: "/",
    },
    {
      id: 2,
      header: "Региональные совренования",
      photo: "/news/small/news-2.webp",
      date: "21.05",
      announce:
        "С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.",
      link: "/",
    },
    {
      id: 3,
      header: "Региональные совренования",
      photo: "/news/small/news-3.webp",
      date: "21.05",
      announce:
        "С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.",
      link: "/",
    },
    {
      id: 4,
      header: "Региональные совренования",
      photo: "/news/small/news-4.webp",
      date: "21.05",
      announce:
        "С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.",
      link: "/",
    },
    {
      id: 5,
      header: "Региональные совренования",
      photo: "/news/small/news-5.webp",
      date: "21.05",
      announce:
        "С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.",
      link: "/",
    },
  ];

  const newsCards = newsData.map((newsItem) => {
    const { id, header, photo, date, announce, link } = newsItem;

    return (
      <div className="news__news-card" key={id}>
        <div className="news__card-header">{header}</div>
        <Link to={link}>
          <img src={photo} alt="" className="news__card-image" />
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
    return <SwiperSlide key={-(index + 1)}>{card}</SwiperSlide>;
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

  return (
    <section className="news">
      <h1 className="news__section-header">Новости</h1>
      <div className="news__vertical-news-container">{newsCards}</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        modules={[Navigation]}
        navigation={true}
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

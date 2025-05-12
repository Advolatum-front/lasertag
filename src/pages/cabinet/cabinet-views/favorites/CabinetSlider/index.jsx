import { inject, observer } from "mobx-react";
import { useRef } from "react";
import { useParams } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import NoData from "../../../../../components/NoData";

import "swiper/css";
import "swiper/css/navigation";

import { ReactComponent as Cross } from "../../../../../svg/cross-ico.svg";
import { useDocumentTitle } from "../../../../../hooks/useDocumentTitle";

import "./index.css";

const CabinetSlider = inject("UsersStore")(
  observer(({ UsersStore }) => {
    useDocumentTitle("Личный кабинет, избранное");
    const { currentUser, removeMediaFromFavorites } = UsersStore;
    const { itemsType, startFrom } = useParams();

    const handleButonUnlikeClick = (itemId) => {
      removeMediaFromFavorites(itemId);
    };

    const dataArray = (currentUser?.favorites || []).filter((item) => {
      if (itemsType === "all") {
        return true;
      } else {
        return item.type === itemsType;
      }
    });

    if (dataArray.length === 0) {
      return (
        <div className="cabinet-slider">
          <h1 className="cabinet-slider__header">Избранное</h1>
          <NoData />
        </div>
      );
    }

    const refs = useRef([]);

    const addToRefs = (el) => {
      if (el && !refs.current.includes(el)) {
        refs.current.push(el);
      }
    };

    /*const urlLink = `/cabiet/favorites/${filterValue}/${id}`;*/

    const swiperSlides = dataArray.map((item) => {
      const { id, type, src } = item;
      const slideContent = (itemsType = "photo" ? (
        <>
          <img src={src} alt="" className="cabinet-slider__image-bg" />
          <img src={src} alt="" className="cabinet-slider__picture" />
        </>
      ) : (
        <>
          <div className="cabinet-slider__video-bg" />
          <video controls className="cabinet-slider__picture" ref={addToRefs}>
            <source src={src} type="video/mp4" />
          </video>
        </>
      ));

      return (
        <SwiperSlide className="cabinet-slider__slide">
          {slideContent}
          <button
            className="cabinet-slider__button-unlike"
            onClick={() => handleButonUnlikeClick(id)}
          >
            <Cross className="cabinet-slider__cross-ico" />
          </button>
        </SwiperSlide>
      );
    });

    const itemIndex = dataArray.findIndex((item) => item.id === startFrom);
    const initialSlide = itemIndex !== -1 ? itemIndex : 0;

    const isLoopModeOn = dataArray.length > 1;

    return (
      <div className="cabinet-slider">
        <h1 className="cabinet-slider__header">Избранное</h1>
        <Swiper
          initialSlide={initialSlide}
          autoHeight={false}
          slidesPerView={1}
          spaceBetween={30}
          loop={isLoopModeOn}
          modules={[Navigation]}
          className="cabinet-slider"
          navigation={{
            prevEl: ".cabinet-slider__prev",
            nextEl: ".cabinet-slider__next",
          }}
          onSlideChange={() => {
            refs.current.forEach((video) => {
              video.pause();
            });
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
            <video controls className="cabinet-slider__picture" ref={addToRefs}>
              <source src="/gallery/video/region1/promo.mp4" type="video/mp4" />
            </video>
            <button className="cabinet-slider__button-unlike">
              <Cross className="cabinet-slider__cross-ico" />
            </button>
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
            <button className="cabinet-slider__button-unlike">
              <Cross className="cabinet-slider__cross-ico" />
            </button>
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
            <button className="cabinet-slider__button-unlike">
              <Cross className="cabinet-slider__cross-ico" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="cabinet-slider__slide">
            <div className="cabinet-slider__video-bg"></div>
            <video controls className="cabinet-slider__picture" ref={addToRefs}>
              <source src="/gallery/video/region1/tnt.mp4" type="video/mp4" />
            </video>
            <button className="cabinet-slider__button-unlike">
              <Cross className="cabinet-slider__cross-ico" />
            </button>
          </SwiperSlide>
        </Swiper>
        <div className="custom-navigation cabinet-slider-nav">
          <button className="cabinet-slider__prev"></button>
          <button className="cabinet-slider__next"></button>
        </div>
      </div>
    );
  }),
);

export default CabinetSlider;

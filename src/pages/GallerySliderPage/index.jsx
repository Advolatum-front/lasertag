// import { Link } from "react-router-dom";

// import { ReactComponent as Arrow } from "../../svg/arrow.svg";

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
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/img/gallery/photo/albums/1/big/photo-1.jpg"
            alt=""
            className="im"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/gallery/photo/albums/1/big/photo-2.jpg"
            alt=""
            className="im"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GallerySliderPage;

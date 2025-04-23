import { useState } from "react";

import PopupChildren from "../../../components/popups/PopupChildren";

import "./index.css";

const Hero = () => {
  const [popupOpened, setPopupOpened] = useState(false);

  const showPopup = () => {
    setPopupOpened(true);
  };
  const closePopup = () => {
    setPopupOpened(false);
  };

  const video = (
    <video controls>
      <source src="/index-page/promo.mp4" type="video/mp4" />
    </video>
  );

  return (
    <section className="hero">
      <button className="hero__button-watch-promo" onClick={showPopup}>
        Смотреть проморолик
      </button>
      <PopupChildren open={popupOpened} onClose={closePopup}>
        {video}
      </PopupChildren>
    </section>
  );
};

export default Hero;

import PopupChildren from "../../../components/popups/PopupChildren";

import "./index.css";

const Hero = () => {
  const showPopup = () => {};

  return (
    <section className="hero">
      <button className="hero__button-watch-promo" onClick={showPopup}>
        Смотреть проморолик
      </button>
      <PopupChildren open>
        <p>Привет</p>
      </PopupChildren>
    </section>
  );
};

export default Hero;

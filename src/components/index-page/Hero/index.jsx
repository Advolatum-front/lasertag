import "./index.css";

const Hero = () => {
  const showPopup = () => {};

  return (
    <section className="hero">
      <button className="hero__button-watch-promo" onClick={showPopup}>
        Смотреть проморолик
      </button>
    </section>
  );
};

export default Hero;

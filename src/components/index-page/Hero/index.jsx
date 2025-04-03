import { Link } from "react-router-dom";

import "./index.css";

const Hero = () => {
  return (
    <section className="hero">
      <Link to="/" className="hero__link">
        Смотреть проморолик
      </Link>
    </section>
  );
};

export default Hero;

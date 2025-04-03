import { Link } from "react-router-dom";

import "./index.css";

const Hero = () => {
  return (
    <section className="hero">
      <Link to="/" className="hero__link">
        <span>Смотреть проморолик</span>
      </Link>
    </section>
  );
};

export default Hero;

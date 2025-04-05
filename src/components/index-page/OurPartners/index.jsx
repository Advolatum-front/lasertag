import { partnersData } from "./partners-data.js";

import "./index.css";

const OurPartners = () => {
  const partnersItems = partnersData.map((obj, index) => {
    const { img, name, description } = obj;

    return (
      <li className="our-partners__list-item" key={index}>
        <img src={img} alt="" className="our-partners__img" />
        <div className="our-partners__text-info">
          <div className="our-partners__partner-name">{name}</div>
          <div className="our-partners__partner-description">{description}</div>
        </div>
      </li>
    );
  });

  return (
    <section className="our-partners">
      <h2 className="our-partners__header">Наши партнёры</h2>
      <ul className="our-partners__list">{partnersItems}</ul>
    </section>
  );
};

export default OurPartners;

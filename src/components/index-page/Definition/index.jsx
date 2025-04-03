import img1 from "../../../img/index/definition/def-card-1.webp";
import img2 from "../../../img/index/definition/def-card-2.webp";
import img3 from "../../../img/index/definition/def-card-3.webp";
import img4 from "../../../img/index/definition/def-card-4.webp";

import "./index.css";

const Definition = () => {
  return (
    <section className="definition">
      <h2 className="definition__header">Что такое лазерный бой?</h2>
      <p className="definition__text">
        Лазертаг, известный также как "лазерный бой" - официальный вид спорта в
        России. Это технологичная командная игра, в которой участники используют
        Тагеры - стрелковые снаряды, имитирующие стрелковое оружие. Эта игра
        сочетает в себе элементы стратегии, физической активности и адреналина.
      </p>
      <ul className="definition__features-list">
        <li className="definition__features-list-item">
          <img src={img1} alt="" className="definition__image" />
        </li>
        <li className="definition__features-list-item">
          <img src={img2} alt="" className="definition__image" />
        </li>
        <li className="definition__features-list-item">
          <img src={img3} alt="" className="definition__image" />
        </li>
        <li className="definition__features-list-item">
          <img src={img4} alt="" className="definition__image" />
        </li>
      </ul>
    </section>
  );
};

export default Definition;

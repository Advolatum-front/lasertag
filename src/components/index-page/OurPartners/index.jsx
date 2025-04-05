import assembly from "../../../img/index/partners/assembly.webp";
import bravery from "../../../img/index/partners/bravery.webp";
import gutid from "../../../img/index/partners/gutid.webp";
import kalininsky from "../../../img/index/partners/kalininsky.webp";
import parlament from "../../../img/index/partners/parlament.webp";
import valor from "../../../img/index/partners/valor.webp";

import "./index.css";

const OurPartners = () => {
  const partnersData = [
    {
      img: assembly,
      name: "Молодёжный парламент Санкт-Петербурга",
      description:
        "Будущее Петербурга – в руках молодёжи! Определи вектор развития нашего города!",
    },
    {
      img: bravery,
      name: "Молодёжный клуб “Мужество”. Калининский район",
      description:
        "Создание пространства, в котором подростки и молодёжь могут реализовать свои потребности и интересы",
    },
    {
      img: gutid,
      name: "Подростково-молодёжный центр “Калининский”",
      description:
        "Мы - это 20 молодёжных клубов и дом молодёжи “Атлант”. Ждём тебя и твоих друзей",
    },
    {
      img: kalininsky,
      name: "“Доблесть веков”. Агентство исторических событий",
      description:
        "Команда увлеченных людей из движения военно-исторической реконструкции",
    },
    {
      img: parlament,
      name: "ГУТИД. Спортивный клуб СПбГУПТД",
      description:
        "Спортивный клуб Санкт-Петербургского государственного Университета Промышленных Технологий и Дизайна",
    },
    {
      img: valor,
      name: "Законодательное Собрание Санкт-Петербурга",
      description:
        "Представительный орган государственной власти субъекта РФ, города федерального значения Санкт-Петербурга",
    },
  ];
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

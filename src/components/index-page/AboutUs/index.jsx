import "./index.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__girl"></div>
      <div className="about-us__text-block">
        <h2 className="about-us__header">О нас</h2>
        <div className="about-us__gun"></div>
        <ul className="about-us__features-list">
          <li className="about-us__feature-item">
            <h2 className="about-us__feature-header">Наименование</h2>
            <p className="about-us__feature-description">
              Региональное отделение Всероссийской общественной организации
              развития лазерного боя «Федерация Лазертага России» в
              Санкт-Петербурге.
            </p>
          </li>
          <li className="about-us__feature-item">
            <h2 className="about-us__feature-header">Деятельность</h2>
            <p className="about-us__feature-description">
              Занимаемся организацией и проведением турниров, спортивно-массовых
              мероприятий и дружеских встреч на территории Санкт-Петербурга.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;

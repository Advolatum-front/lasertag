import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../../svg/arrow.svg";

import "./index.css";

const ActivityViewer = () => {
  return (
    <section className="current-activity">
      <div className="current-activity__panel">
        <Link to="/" className="current-activity__link-go-back">
          <Arrow className="current-activity__arrow-ico" />
        </Link>
        <h1 className="current-activity__header">Тренировочный бой юниоров</h1>
        <div className="current-activity__description">
          <p>
            Соревнование между совершеннолетними (18-25 лет) спортсменами с
            базовым (начальным) уровнем подготовки с малым количеством (не более
            3-ёх матчей, учитывая тренировочные) боевого опыта или полным его
            отсутствием.
          </p>

          <p>
            Десять команд по пятнадцать человек будут сражаться друг против
            друга за первенство в нашем тренировочном бою. Победители получат
            сертификат о прохождении боевой подготовки лазерного боя, а
            остальные спортсмены - сертификат об участии.
          </p>
        </div>
        <div className="current-activity__date">03.12</div>
        <Link to="/activities" className="current-activity__link-send-request">
          Подать заявку
        </Link>
      </div>
    </section>
  );
};

export default ActivityViewer;

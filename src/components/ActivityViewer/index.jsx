import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../svg/arrow.svg";

import "./index.css";

const ActivityViewer = () => {
  return (
    <div className="activity-viewer">
      <Link to="/" className="activity-viewer__link-go-back">
        <Arrow className="activity-viewer__arrow-ico" />
      </Link>
      <h1 className="activity-viewer__header">Тренировочный бой юниоров</h1>
      <div className="activity-viewer__description">
        <p>
          Соревнование между совершеннолетними (18-25 лет) спортсменами с
          базовым (начальным) уровнем подготовки с малым количеством (не более
          3-ёх матчей, учитывая тренировочные) боевого опыта или полным его
          отсутствием.
        </p>

        <p>
          Десять команд по пятнадцать человек будут сражаться друг против друга
          за первенство в нашем тренировочном бою. Победители получат сертификат
          о прохождении боевой подготовки лазерного боя, а остальные спортсмены
          - сертификат об участии.
        </p>
      </div>
      <div className="activity-viewer__bottom-part">
        <div className="activity-viewer__date">03.12</div>
        <Link to="/activities" className="activity-viewer__link-send-request">
          Подать заявку
        </Link>
      </div>
    </div>
  );
};

export default ActivityViewer;

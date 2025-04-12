import ActivityViewer from "../../../../../components/ActivityViewer";

import "./index.css";

const CabinetActivityPage = () => {
  return (
    <div className="cabinet-activity-page">
      <h1 className="cabinet-activity-page__header">Мероприятия</h1>
      <ActivityViewer
        goBackLink="/"
        header="Тренировочный бой юниоров"
        description="Соревнование между совершеннолетними (18-25 лет) спортсменами с
        базовым (начальным) уровнем подготовки с малым количеством (не более
        3-ёх матчей, учитывая тренировочные) боевого опыта или полным его
        отсутствием. Десять команд по пятнадцать человек будут сражаться друг против друга
        за первенство в нашем тренировочном бою. Победители получат сертификат
        о прохождении боевой подготовки лазерного боя, а остальные спортсмены
        - сертификат об участии."
        date="03.12"
        sendRequestLink="/"
        borderAround
        navLinks
        prevLinkUrl="/"
        nextLinkUrl="/"
      />
    </div>
  );
};

export default CabinetActivityPage;

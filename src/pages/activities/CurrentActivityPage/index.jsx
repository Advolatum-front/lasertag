import ActivityViewer from "../../../components/ActivityViewer";

import "./index.css";

const CurrentActivityPage = () => {
  return (
    <section className="current-activity">
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
      />
    </section>
  );
};

export default CurrentActivityPage;

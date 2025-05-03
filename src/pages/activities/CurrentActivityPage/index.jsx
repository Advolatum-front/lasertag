import { useParams } from "react-router";
import { useEffect } from "react";
import { inject, observer } from "mobx-react";

import ActivityViewer from "../../../components/ActivityViewer";
import NoData from "../../../components/NoData";

import "./index.css";

const CurrentActivityPage = inject("ActivitiesStore")(
  observer(({ ActivitiesStore }) => {
    const id = useParams().id;
    const { fetchedActivityItem, fetchActivityItemById } = ActivitiesStore;

    useEffect(() => {
      fetchActivityItemById(id);
    }, [fetchActivityItemById, id]);

    if (!fetchedActivityItem) {
      return (
        <section className="current-activity">
          <NoData />
        </section>
      );
    }

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
  }),
);

export default CurrentActivityPage;

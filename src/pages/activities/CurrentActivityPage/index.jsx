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

    const { title, date, fullText, status } = fetchedActivityItem;
    const fullTextLines = [...fullText];

    return (
      <section className="current-activity">
        <ActivityViewer
          id={id}
          date={date}
          title={title}
          fullTextLines={fullTextLines}
          status={status}
          goBackLinkURL="/activities"
        />
      </section>
    );
  }),
);

export default CurrentActivityPage;

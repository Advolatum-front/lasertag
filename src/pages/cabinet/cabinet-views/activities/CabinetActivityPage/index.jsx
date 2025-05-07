import { useParams } from "react-router";
import { useEffect } from "react";
import { inject, observer } from "mobx-react";

import ActivityViewer from "../../../../../components/ActivityViewer";
import NoData from "../../../../../components/NoData";

import "./index.css";

const CabinetActivityPage = inject(
  "ActivitiesStore",
  "UsersStore",
)(
  observer(({ ActivitiesStore, UsersStore }) => {
    const id = useParams().id;
    const {
      fetchedActivityItem,
      fetchActivityItemById,
      fetchAdjacentActivitiesIdsById,
      adjacentActivitiesIds,
    } = ActivitiesStore;
    const { isAuthenticated } = UsersStore;

    useEffect(() => {
      fetchActivityItemById(id);
      fetchAdjacentActivitiesIdsById(id);
    }, [fetchActivityItemById, id, fetchAdjacentActivitiesIdsById]);

    if (!fetchedActivityItem) {
      return (
        <section className="current-activity">
          <NoData />
        </section>
      );
    }

    const { title, date, fullText, status } = fetchedActivityItem;
    const fullTextLines = [...fullText];

    const navLinksURLs = adjacentActivitiesIds.map(
      (id) => `/cabinet/activities/${id}`,
    );

    return (
      <div className="cabinet-activity-page">
        {" "}
        <ActivityViewer
          id={id}
          prevNextIds={navLinksURLs}
          date={date}
          title={title}
          fullTextLines={fullTextLines}
          status={status}
          goBackLinkURL="/cabinet/activities/"
          isAuthenticated={isAuthenticated}
        />
      </div>
    );
  }),
);

export default CabinetActivityPage;

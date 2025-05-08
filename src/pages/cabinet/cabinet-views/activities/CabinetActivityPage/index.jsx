import { useParams } from "react-router";
import { useEffect } from "react";
import { inject, observer } from "mobx-react";

import ActivityViewer from "../../../../../components/ActivityViewer";
import NoData from "../../../../../components/NoData";

import "./index.css";

const REQUEST_SENT_STATUS = 3;

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
    const { isAuthenticated, currentUser } = UsersStore;

    useEffect(() => {
      fetchActivityItemById(id);
      fetchAdjacentActivitiesIdsById(id);
    }, [fetchActivityItemById, id, fetchAdjacentActivitiesIdsById]);

    if (!fetchedActivityItem) {
      return (
        <section className="cabinet-activity-page">
          <NoData />
        </section>
      );
    }

    const { title, date, fullText, status } = fetchedActivityItem;
    const fullTextLines = [...fullText];

    const navLinksURLs = adjacentActivitiesIds.map(
      (id) => `/cabinet/activities/${id}`,
    );

    const currentUserActivities = currentUser?.activities || [];
    const isRequestSent = currentUserActivities.some(
      (activity) => activity.id === id,
    );
    const statusToPass = isRequestSent ? REQUEST_SENT_STATUS : status;

    return (
      <div className="cabinet-activity-page">
        <ActivityViewer
          id={id}
          prevNextIds={navLinksURLs}
          date={date}
          title={title}
          fullTextLines={fullTextLines}
          status={statusToPass}
          goBackLinkURL="/cabinet/activities/"
          isAuthenticated={isAuthenticated}
        />
      </div>
    );
  }),
);

export default CabinetActivityPage;

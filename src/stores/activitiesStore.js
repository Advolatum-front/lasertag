import { makeObservable, action, observable } from "mobx";
import { getAdjacentByIndex } from "../utils/arrays/functions";

class ActivitiesStore {
  initialActivitiesList = require("./data/activities.json");

  constructor() {
    makeObservable(this, {
      activitiesList: observable,
      fetchedActivityItem: observable,
      adjacentActivitiesIds: observable,
      closestActivities: observable,

      fetchActivities: action,
      fetchActivityItemById: action,
      fetchAdjacentActivitiesIdsById: action,
      fetchClosestActivities: action,
    });
  }

  fetchActivities = () => {
    this.activitiesList = this.initialActivitiesList;
  };

  fetchActivityItemById = (id) => {
    this.fetchActivities();
    this.fetchedActivityItem = this.activitiesList.find(
      (item) => item.id === id,
    );
  };

  fetchAdjacentActivitiesIdsById = (id) => {
    this.fetchActivities();
    const index = this.activitiesList.findIndex((item) => item.id === id);
    this.adjacentActivitiesIds = getAdjacentByIndex(
      this.activitiesList,
      index,
    ).map((item) => item.id);
  };

  fetchLastActivities = (count) => {
    this.fetchActivities();

    this.lastActivities = this.activitiesList
      .toSorted((a, b) => {
        const [dateNumA, dateNumB] = [a.date, b.date].map((date) => {
          return Number(date.replace(".", ""));
        });

        return dateNumA - dateNumB;
      })
      .slice(-count);
  };
}

const activitiesStore = new ActivitiesStore();
export default activitiesStore;

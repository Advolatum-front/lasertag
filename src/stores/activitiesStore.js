import { makeObservable, action, observable } from "mobx";
import { getAdjacentByIndex } from "../utils/arrays/functions";
import { parseDate } from "../utils/date/functions";

class ActivitiesStore {
  initialActivitiesList = require("./data/activities.json");

  activitiesList = [];
  fetchedActivityItem = null;
  adjacentActivitiesIds = [];
  upcomingActivities = [];

  constructor() {
    makeObservable(this, {
      activitiesList: observable,
      fetchedActivityItem: observable,
      adjacentActivitiesIds: observable,
      upcomingActivities: observable,

      fetchActivities: action,
      fetchActivitiesBySubstring: action,
      fetchActivityItemById: action,
      fetchAdjacentActivitiesIdsById: action,
      fetchUpcomingActivities: action,
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

  fetchUpcomingActivities = (count = 3) => {
    this.fetchActivities();

    const currentDate = new Date();

    const upcomingActivities = this.activitiesList.filter((activity) => {
      const activityDate = parseDate(activity.date);
      return activityDate >= currentDate;
    });

    upcomingActivities.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA - dateB;
    });

    this.upcomingActivities = upcomingActivities.slice(0, count);
  };

  fetchActivitiesBySubstring = (substring) => {
    const initialActivitiesList = this.initialActivitiesList;

    this.activitiesList = initialActivitiesList.filter((activity) => {
      const lc = activity.title.toLowerCase();
      return lc.includes(substring);
    });
  };
}

const activitiesStore = new ActivitiesStore();
export default activitiesStore;

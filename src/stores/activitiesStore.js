import { makeObservable, action, observable } from "mobx";
import { getAdjacentByIndex } from "../utils/arrays/functions";

class ActivitiesStore {
  initialActivitiesList = require("./data/activities.json");

  constructor() {
    makeObservable(this, {
      activitiesList: observable,
      fetchedActivityItem: observable,
      adjacentActivitiesIds: observable,
      upcommingActivities: observable,

      fetchActivities: action,
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

  fetchClosestActivities = (count) => {
    this.fetchActivities();

    const sortedActivitiesArray = this.activitiesList.toSorted((a, b) => {
      const [dateNumA, dateNumB] = [a.date, b.date].map((date) => {
        return Number(date.replace(/\./g, ""));
      });

      return dateNumA - dateNumB;
    });

    this.upcommingActivities;
  };

  fetchUpcomingActivities = (count = 3) => {
    this.fetchActivities();

    const currentDate = new Date();

    const parseDate = (dateString) => {
      const [day, month, year] = dateString.split(".").map(Number);
      return new Date(year, month - 1, day);
    };

    const upcomingActivities = this.activitiesList.filter((activity) => {
      const activityDate = parseDate(activity.date);
      return activityDate >= currentDate;
    });

    upcomingActivities.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA - dateB;
    });

    this.closestActivities = upcomingActivities.slice(-count);
  };
}

const activitiesStore = new ActivitiesStore();
export default activitiesStore;

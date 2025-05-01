import { observable, action, makeObservable } from "mobx";

class ActivitiesStore {
  initialActivitiesList = require("./data/activities.json");
  activitiesList = [];
  fetchedActivitiesItem = null;
  adjacentActivitiesIds = [];
  closestActivities = [];
}

const activitiesStore = new ActivitiesStore();
export default activitiesStore;

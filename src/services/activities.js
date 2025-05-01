import { baseRequest } from "../transport/mockEffect.js";

export const activitiesService = {
  getActivities: () =>
    baseRequest({
      url: "/api/get-activities/",
    }),
};

import { baseRequest } from "../transport/mockEffect.js";

export const activitiesService = {
  getActivities: (data = {}) =>
    baseRequest({
      url: "/api/get-activities/",
      data,
    }),
};

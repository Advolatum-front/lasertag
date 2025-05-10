import { parseDate } from "../../../../../utils/date/functions";

export const futureAndPast = (activitiesList) => {
  const currentDate = new Date();

  const past = [];
  const future = [];

  activitiesList.forEach((activity) => {
    const { date } = activity;

    if (parseDate(date) >= currentDate) {
      future.push(activity);
    } else {
      past.push(activity);
    }
  });

  return [future, past];
};

import { dateTimeParse } from "@gravity-ui/date-utils";

export const formatDate = (date, format) => {
  return dateTimeParse(date).format(format);
};

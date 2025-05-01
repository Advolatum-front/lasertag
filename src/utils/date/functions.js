import { dateTimeParse } from "@gravity-ui/date-utils";
const DEFAULT_FORMAT = "DD.MM";

export const formatDate = (date, format = DEFAULT_FORMAT) => {
  return dateTimeParse(date).format(format);
};

export const stripYear = (DDMMYYYDate) => {
  const [d, m] = DDMMYYYDate.split(".");
  return `${d}.${m}`;
};

export const parseDate = (dateString) => {
  const [day, month, year] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day);
};

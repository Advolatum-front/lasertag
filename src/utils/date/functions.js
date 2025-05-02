export const stripYear = (DDMMYYYDate) => {
  const [d, m] = DDMMYYYDate.split(".");
  return `${d}.${m}`;
};

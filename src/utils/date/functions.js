export const stripYear = (DDMMYYYDate) => {
  const [d, m, _] = DDMMYYYDate.split(".");
  return `${d}.${m}`;
};

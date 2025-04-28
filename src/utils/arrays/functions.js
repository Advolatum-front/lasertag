export const getAdjacentByIndex = (arr, index) => {
  const n = arr.length;
  const outOfRange = index < 0 || index > n;

  if (n === 0 || outOfRange) {
    return [];
  }

  if (n === 1) {
    return [arr[0], arr[0]];
  }

  const prev = arr.at(index - 1);
  const next = arr.at((index + 1) % n);

  return [prev, next];
};

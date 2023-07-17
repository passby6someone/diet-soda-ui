export const storeNumRateFormatter = (num: number, capacity: number) =>
  Math.round((num / capacity) * 10000) / 100;

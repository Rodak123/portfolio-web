export const makeDate = (day: number, month: number, year: number) =>
  new Date(year, month - 1, day);

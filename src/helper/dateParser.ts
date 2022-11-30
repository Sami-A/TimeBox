import { DateOptions } from "scene/TimeBox/types";

const months = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);
const days = new Map([
  [1, "Sunday"],
  [2, "Monday"],
  [3, "Tuesday"],
  [4, "Wednesday"],
  [5, "Thursday"],
  [6, "Friday"],
  [7, "Saturday"],
]);

export const getFullDateString = (dateText: DateOptions): string => {
  const today = new Date();
  if (dateText === DateOptions.TODAY) return getFormattedDate(today);
  else {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return getFormattedDate(tomorrow);
  }
};

export const getFormattedDate = (date: Date = new Date()): string => {
  const dayOfWeek = days.get(date.getDay() + 1);

  const month = months.get(date.getMonth() + 1);

  const dayOfMonth =
    date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate();

  const year = date.getFullYear();

  return `${dayOfWeek},${month} ${dayOfMonth}, ${year}`;
};

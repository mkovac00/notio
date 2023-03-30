import { NoteSchema } from "../models/NoteSchema";

const monthsStringNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getCurrentDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let monthString = monthsStringNames[month];

  return `${monthString} ${day}, ${year}`;
};

export const removeDuplicates = (array: Array<typeof NoteSchema>) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};

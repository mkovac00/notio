import { NoteSchema } from "../models/NoteSchema";
import { monthsStringNames } from "./variables";

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

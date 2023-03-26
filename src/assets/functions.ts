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

  let monthString = monthsStringNames[month + 1];

  return `${monthString} ${day}, ${year}`;
};

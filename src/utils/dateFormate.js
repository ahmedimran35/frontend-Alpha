/**
 * This a function that process date string to more readable form
 * @param {string} dateString a string represented date is Internation format
 * @returns {string} a readable string of date and year for showing in UI
 */
const getReadableDate = (dateString) => {

  const date = new Date(dateString);

  // check if date is a valid date object
  if (date.toString() === "Invalid Date") return "Invalid Date";

  // Valid date opton is processed to show more readable date
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};


export default getReadableDate;

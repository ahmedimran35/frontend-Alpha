
const getLastId = (str) => {
  if (!str) return "";
  // Split the string using "-" as the delimiter
  const parts = str.split("-");
  // Return the last element of the array, which is the ID
  return parts[parts.length - 1];
};

export default getLastId;

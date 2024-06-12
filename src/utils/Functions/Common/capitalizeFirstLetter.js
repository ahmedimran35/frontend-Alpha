/**
 * This function processes a text to a required form for UI 
 * @param {string} text a category/subcategory names as it appers in url
 * @returns {string} a ui presentable string after removing hypen and capitalizing first letter of each word
 */
const capitalizeFirstLetter = (text) => {
  if (!text || typeof(text) !== "string") return "";

  let newText = text
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  // const lastIndex = newText.length - 1;

  // if (newText[lastIndex] !== "s") newText += "s";

  return newText;
};

export default capitalizeFirstLetter;

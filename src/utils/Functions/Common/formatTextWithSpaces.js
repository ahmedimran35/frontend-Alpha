/**
 * A functtion that replaces spaces between word with hypen(-)
 * @param {string} text a text of string type
 * @returns a text of string type after necessary processing of input tex
 */
const formatTextWithSpaces = (text) => {
  if (!text) return "";
  return text.replace(/\s/g, "-");
};
export default formatTextWithSpaces;
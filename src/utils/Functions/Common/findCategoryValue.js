// const url = "/category-data?category=icon&searchTerm=s";
/**
 * * A function to find category param value form url
 * @param {string} url given url
 * @returns value of category param
 */
function findCategoryValue(url) {
  const params = new URLSearchParams(url.split("?")[1]);
  const category = params.get("category");
  return category ? category : "";
}

export default findCategoryValue;

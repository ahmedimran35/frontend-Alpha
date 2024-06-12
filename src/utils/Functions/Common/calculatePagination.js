/**
 * This function is a helper function for pagination 
 * @param {number} totalItems denotes the argument which takes total items to be shown
 * @param {number} itemsPerPage denotes a variable to take items per page
 * @returns {number} a value that tells how many pages to render
 */
export function calculateNumberOfPages(totalItems = 0, itemsPerPage = 0) {
  // edge case
  if (totalItems < 0 || itemsPerPage < 0)
    return 0;

  const res = Math.ceil(totalItems / itemsPerPage);
  // checking if res is integer and greater than or equal to 0
  if (Number.isInteger(res) && res > 0)
    return res;

  //  default case
  return 0;
}

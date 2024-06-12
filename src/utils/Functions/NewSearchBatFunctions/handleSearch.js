/**
 *
 * @param e
 * @param searchValue
 * @param setSearchTerm
 * @param navigate
 * @param selectedCategory
 * @returns
 */
const handleSearch = (
  e,
  searchValue,
  setSearchTerm,
  navigate,
  selectedCategory
) => {
  e.preventDefault();

  const pattern = /^(?!\s)[a-zA-Z\s,:-]+$/g;
  const result = pattern.test(searchValue);
  if (result === false) {
    return;
  }

  setSearchTerm(searchValue);

  navigate(
    `/category-data?category=${selectedCategory}&searchTerm=${searchValue}`
  );
};
export default handleSearch;

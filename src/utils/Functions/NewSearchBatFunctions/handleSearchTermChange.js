/**
 * * Get the search input in search field
 * @param {Event} e
 * @param {func} setSearchValue
 */
const handleSearchTermChange = (e, setSearchValue) => {
  setSearchValue(e?.target?.value?.toLowerCase()); // Ensure case-insensitive search
};

export default handleSearchTermChange;

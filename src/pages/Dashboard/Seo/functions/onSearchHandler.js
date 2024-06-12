const onSearchHandler = (e, setSearchErrMessage, setSearchTerm) => {
  e.preventDefault();
  setSearchErrMessage("");
  const form = new FormData(e.currentTarget);
  const searchTerm = form.get("searchTerm");
  // * Serach Input validation
  // const pattern = /^[a-zA-Z\s]+$/gm;
  const pattern = /^(?!\s)[a-zA-Z\s,:-]+$/g;
  const result = pattern.test(searchTerm);
  if (result === false) {
    setSearchErrMessage("Characterts & spaces, no leading spaces.");
    return;
  }
  setSearchTerm(searchTerm);
};

export default onSearchHandler;

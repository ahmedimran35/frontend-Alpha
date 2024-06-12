import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCategory from "../../../../Hooks/useCategory";
import handleSearch from "../../../../utils/Functions/NewSearchBatFunctions/handleSearch";
import SearchInputField from "../../../../components/NewSearchBar/SearchInputField";
import CategorySelectField from "../../../../components/NewSearchBar/CategorySelectField";
import SearchButton from "../../../../components/buttons/SearchButton/SearchButton";

const NewBannerSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { setSearchTerm } = useCategory();
  const navigate = useNavigate();

  // Handle category selection change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event?.target?.value);
  };

  return (
    <form
      onSubmit={() =>
        handleSearch(
          event,
          searchValue,
          setSearchTerm,
          navigate,
          selectedCategory
        )
      }
      className="flex justify-center items-center"
      role="form"
    >
      <SearchInputField
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></SearchInputField>

      <CategorySelectField
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      ></CategorySelectField>

      <SearchButton />
    </form>
  );
};

export default NewBannerSearch;

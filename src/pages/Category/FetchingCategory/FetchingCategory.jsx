import AccordianCategory from "../../../components/AccordianCategory/AccordianCategory";
import AccordianSubCategory from "../../../components/AccordianCategory/AccordianSubCategory";
import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
import useCategory from "../../../Hooks/useCategory";
import FetchingCategoryData from "../FetchingCategoryData/FetchingCategoryData";
import AccordionCategoryFilter from "../../../components/AccordianCategory/AccordionCategoryFilter";
import { IoIosSearch } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useResponsiveness from "../../../Hooks/useResponsiveness";
import FetchingCategoryPagination from "./FetchingCategoryPagination";
import AllSearchCategoryResult from "./AllSearchCategoryResult";

const FetchingCategory = () => {
  const { isLaptopView, isDesktopView } = useResponsiveness();
  const { category, subCategory, setSearchTerm, refetch } = useCategory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const urlSearchTerm = queryParams.get("searchTerm");
  const [searchValue, setSearchValue] = useState(urlSearchTerm);
  const [searchErrMessage, setSearchErrMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchTerm = form.get("searchTerm");

    // search input validation
    const pattern = /^(?!\s)[a-zA-Z\s]+$/g;
    const result = pattern.test(searchTerm);
    setSearchErrMessage("");
    if (result === false) {
      setSearchErrMessage("Only characters followed by spaces!!");
      return;
    }

    setSearchTerm(searchTerm);
    setSearchValue(searchTerm);
    navigate(
      `/category-data?category=${category ? category : "All"}&subCategory=${subCategory ? subCategory : ""
      }&searchTerm=${searchTerm}`
    );
  };

  const handleClear = () => {
    setSearchErrMessage("");
    setSearchValue("");
    setSearchTerm("");
    const searchInput = document.querySelector('input[name="searchTerm"]');
    searchInput.value = "";
    navigate(
      `/category-data?category=${category ? category : "All"}&subCategory=${subCategory ? subCategory : ""
      }`
    );
  };

  // re render the component when coming from browse all categories button
  useEffect(() => {
    if (location.state) setSearchTerm("");
    refetch();
  }, [setSearchTerm, location.state, refetch]);

  return (
    <div className={`max-w-7xl mx-auto pl-5 pr-5  mt-5 mb-10`}>
      <Helmet>
        <title>Free Assets at your fingertips </title>
        <meta name="description" content="All assets in one place" />
      </Helmet>
      <div
        className={`flex flex-col md:flex-row gap-5 md:gap-0 justify-between  ${isLaptopView ? "items-start" : ""
          } ${isDesktopView ? "items-center" : ""}`}
      >
        <BreadCrumb />

        {/* search bar */}
        <form onSubmit={handleSubmit} className="relative">
          <div>
            <input
              data-test="category-search"
              type="text"
              name="searchTerm"
              placeholder="Search here..."
              defaultValue={searchValue}
              className="border text-sm  focus:border-[#ff0000]  focus:outline-none  pl-2 h-10 w-full md:w-64 lg:w-72 rounded-md"
            />
          </div>
          {searchValue && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-11 top-[11px]  text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <RxCross2 className="text-[#ff0000] text-xl " />
            </button>
          )}
          <button
            onChange={(e) => setSearchTerm(e.target.value)}
            type="submit"
            className="absolute top-[5px] right-[13px]"
          >
            <IoIosSearch className="text-[#ff0000] text-3xl " />
          </button>
          <span className="text-xs text-red-500">{searchErrMessage}</span>
        </form>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-2 my-10 ">
        <div className="w-full md:w-1/4 md:min-h-screen border rounded-md p-[3px] mb-10 md:mb-0 md:p-[7px] lg:p-3 md:sticky md:top-2 ">
          <AccordionCategoryFilter />
          <AccordianCategory />
          <AccordianSubCategory />
        </div>
        <div className="w-full md:w-3/4">
          {category === "All" ? (
            <AllSearchCategoryResult />
          ) : (
            <FetchingCategoryData />
          )}
        </div>
      </div>
      <div>{category !== "All" && <FetchingCategoryPagination />}</div>
    </div>
  );
};

export default FetchingCategory;

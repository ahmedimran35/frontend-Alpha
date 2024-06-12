import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import FetchingToolsAndSoftwareData from "../FetchingCategoryData/FetchingToolsAndSoftwareData";
import AccourdianToolsAndSoftwareCategory from "../../../components/AccordianCategory/AccourdianToolsAndSoftwareCategory";
import AccordianToolsAndSoftwareSubCategory from "../../../components/AccordianCategory/AccordianToolsAndSoftwareSubCategory";
import AccordianToolsAndSoftwareCategoryFilter from "../../../components/AccordianCategory/AccordianToolsAndSoftwareCategoryFilter";
import useToolsAndSoftwareCategory from "../../../Hooks/useToolsAndSoftware";
import FetchingToolsAndSoftwarePagination from "./FetchingToolsAndSoftwarePagination";
import ScrollToTop from "../../../components/ScrollToTheTop/ScrollToTheTop";
import useResponsiveness from "../../../Hooks/useResponsiveness";

const FetchingToolsAndSoftwareCategory = () => {
  const { category, subCategory, setSearchTerm } =
    useToolsAndSoftwareCategory();
  const { isDesktopView, isLaptopView } = useResponsiveness();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchTerm = form.get("searchValue");

    setSearchTerm(searchTerm);
    setSearchValue(searchTerm);
    navigate(
      `/category-tools-and-software?category=tools-and-softwares&subCategory=${subCategory ? subCategory : ""
      }&searchValue=${searchTerm}`
    );
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchTerm("");
    const searchInput = document.querySelector('input[name="searchValue"]');
    searchInput.value = "";
    navigate(
      `/category-tools-and-software?category=${category ? category : "All"
      }&subCategory=${subCategory ? subCategory : ""}`
    );
  };
  const searchClassName =
    "border text-sm  focus:border-[#ff0000]  focus:outline-none pl-2 mr-2 h-10 w-full md:w-64 lg:w-72  rounded-md";

  return (
    <div className={`max-w-7xl mx-auto pl-5 pr-5 md:pr-3 mt-5 mb-10`}>
      <ScrollToTop />
      <div
        className={`flex flex-col md:flex-row gap-5 md:gap-0 justify-between  ${isLaptopView ? "items-start" : ""
          } ${isDesktopView ? "items-center" : ""}`}
      >
        <BreadCrumb />
        <form onSubmit={handleSubmit} className="relative">
          <div>
            <input
              type="text"
              name="searchValue"
              placeholder="Search here..."
              className={searchClassName}
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
        </form>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-2 my-10 ">
        <div className="w-full md:w-1/4 md:min-h-screen border rounded-md p-[3px] md:p-[7px] lg:p-3 md:sticky md:top-2 ">
          <AccordianToolsAndSoftwareCategoryFilter />
          <AccourdianToolsAndSoftwareCategory />
          <AccordianToolsAndSoftwareSubCategory />
        </div>
        <div
          className={`w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:px-2 rounded-md`}
        >
          <FetchingToolsAndSoftwareData />
        </div>
      </div>
      <div>
        <FetchingToolsAndSoftwarePagination />
      </div>
    </div>
  );
};

export default FetchingToolsAndSoftwareCategory;

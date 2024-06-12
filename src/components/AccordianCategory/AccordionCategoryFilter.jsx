import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import { RxCross2 } from "react-icons/rx";
import capitalizeFirstLetter from "../../utils/Functions/Common/capitalizeFirstLetter";
const AccordionCategoryFilter = () => {
  const {
    category: selectedCategory,
    subCategory: selectedSubCategory,
    urlSearchTerm,
    setSelectedCategoryLink,
    setSelectedSubCategory,
  } = useCategory();

  const formattedCategory = capitalizeFirstLetter(selectedCategory);

  const formattedSubCategory = capitalizeFirstLetter(selectedSubCategory)

  return (
    <div>
      <Accordion elevation={0} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={`${"All" === selectedCategory
            ? "bg-[#ff0000] text-white border-none"
            : ""
            }  border p-1 rounded-md text-sm lg:text-base `}
        >
          Filter
        </AccordionSummary>

        {/* category filter  */}
        <div className="flex ml-5 flex-row flex-wrap gap-[4px]">
          <NavLink
            className={`bg-[#ff0000]  text-white border-none border px-${selectedCategory === "All" ? "0" : "2"
              } py-${selectedCategory === "All" ? "0" : "1"
              } rounded-md text-xs  flex flex-row justify-between items-center gap-1`}
            to={`/category-data?category=All&searchTerm=${urlSearchTerm ? urlSearchTerm : ""
              }`}
          >
            {selectedCategory === "All" ? "" : formattedCategory}

            <button
              onClick={() => setSelectedCategoryLink("All")}
              className=" text-black "
            >
              {selectedCategory === "All" ? (
                ""
              ) : (
                <RxCross2 className=" text-red-500 bg-white rounded-full text-xs p-[1px]" />
              )}
            </button>
          </NavLink>

          {/* sub category filter  */}
          <NavLink
            className={`bg-[#ff0000] text-white border-none rounded-md text-xs flex flex-row justify-between items-center gap-1 px-${selectedSubCategory ? "2" : "0"
              } py-${selectedSubCategory ? "1" : "0"
              }`}
            to={`/category-data?category=${selectedCategory}&subCategory=${selectedSubCategory ? "" : ""
              }&searchTerm=${urlSearchTerm ? urlSearchTerm : ""}`}
          >
            {/* {selectedSubCategory ? selectedSubCategory : "Apply Sub Category"} */}
            {formattedSubCategory}

            <button
              onClick={() => setSelectedSubCategory("")}
              className={` text-black my-auto p-${formattedSubCategory ? "1" : "0"
                }`}
            >
              {selectedSubCategory ? (
                <RxCross2 className=" text-red-500 bg-white rounded-full text-xs p-[1px]" />
              ) : (
                ""
              )}
            </button>
          </NavLink>
        </div>
      </Accordion>
    </div>
  );
};

export default AccordionCategoryFilter;

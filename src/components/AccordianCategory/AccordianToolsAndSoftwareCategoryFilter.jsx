import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import useToolsAndSoftwareCategory from "../../Hooks/useToolsAndSoftware";
import capitalizeFirstLetter from "../../utils/Functions/Common/capitalizeFirstLetter";

const AccordianToolsAndSoftwareCategoryFilter = () => {
  const {
    category: selectedCategory,
    subCategory: selectedSubCategory,
    urlSearchTerm,
    setSelectedCategoryLink,
    setSelectedSubCategory,
  } = useToolsAndSoftwareCategory();

  const category =
    selectedCategory === "tools-and-softwares" ? "Software & Tools" : "";
  const formattedSubCategory = capitalizeFirstLetter(selectedSubCategory);

  return (
    <div>
      <Accordion elevation={0} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={`${
            "All" === selectedCategory
              ? "bg-[#ff0000] text-white border-none"
              : ""
          }  border p-1 rounded-md text-sm lg:text-base `}
        >
          Filter
        </AccordionSummary>

        {/* category filter  */}
        <div className="flex ml-5 flex-row flex-wrap gap-[5px]">
          <NavLink
            className={`bg-[#ff0000]  text-white border-none border px-2 py-1 rounded-md text-xs flex flex-row justify-between items-center gap-1`}
            to={`/category-tools-and-software?category=tools-and-softwares&searchValue=${
              urlSearchTerm ? urlSearchTerm : ""
            }`}
          >
            {category}

            <button
              onClick={() =>
                setSelectedCategoryLink(
                  "/category-tools-and-software?category=tools-and-softwares"
                )
              }
              className=" text-black "
            >
              <div
                onClick={() =>
                  setSelectedCategoryLink(
                    "/category-tools-and-software?category=All"
                  )
                }
              >
                <span
                  onClick={() =>
                    setSelectedCategoryLink(
                      "/category-tools-and-software?category=tools-and-softwares"
                    )
                  }
                >
                  <RxCross2 className=" text-red-500 bg-white rounded-full text-md p-[1px]" />
                </span>
              </div>
            </button>
          </NavLink>

          {/* sub category filter  */}
          <NavLink
            className={`bg-[#ff0000] text-white border-none rounded-md text-xs flex flex-row justify-between items-center gap-1 px-${
              formattedSubCategory ? "2" : "0"
            } py-${formattedSubCategory ? "1" : "0"}`}
            to={`/category-tools-and-software?category=tools-and-softwares&subCategory=${
              selectedSubCategory ? "" : ""
            }&searchValue=${urlSearchTerm ? urlSearchTerm : ""}`}
          >
            {/* {selectedSubCategory ? selectedSubCategory : "Apply Sub Category"} */}
            {formattedSubCategory}

            <button
              onClick={() => setSelectedSubCategory("")}
              className={` text-black my-auto p-${
                formattedSubCategory ? "1" : "0"
              }`}
            >
              {selectedSubCategory ? (
                <RxCross2 className=" text-red-500 bg-white rounded-full text-md p-[1px]" />
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

export default AccordianToolsAndSoftwareCategoryFilter;

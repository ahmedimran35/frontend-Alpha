import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useToolsAndSoftwareCategory from "../../Hooks/useToolsAndSoftware";


const AccordianToolsAndSoftwareSubCategory = () => {
  const {
    category,
    subCategory: selectedSubCategory,
    urlSearchTerm,
    selectedCategoryLink,
    setSelectedSubCategory,
    subCategories,
    setSubCategories,
  } = useToolsAndSoftwareCategory();

  useEffect(() => {
    fetch("/softwareAndtoolsCategory.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredSubCategories = data.find(
          (category) =>
            category?.categoryLink === "tools-and-softwares"
        )?.subCategories;
        setSubCategories(filteredSubCategories );
      });
      
  }, [selectedCategoryLink?.categoryLink, setSubCategories, category, selectedCategoryLink, urlSearchTerm]);

  return (
    <div>
      <Accordion elevation={0} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-sm lg:text-base"
        >
          Sub Category
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {subCategories?.map((subCategory, i) => (
            <NavLink
              to={`/category-tools-and-software?category=${category}&subCategory=${
                subCategory?.subCategoryLink
              }&searchValue=${urlSearchTerm ? urlSearchTerm : ""}`}
              key={i}
              className={`${
                subCategory?.subCategoryLink === selectedSubCategory
                  ? "bg-[#ff0000] text-white"
                  : ""
              }  border px-2 py-1  rounded-md text-xs`}
              onClick={() =>
                setSelectedSubCategory(subCategory?.subCategoryLink)
              }
            >
              {subCategory?.subCategoryName}
            </NavLink>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordianToolsAndSoftwareSubCategory;

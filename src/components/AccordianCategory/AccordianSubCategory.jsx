import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import categoryConstants from "../../utils/Constants/CategoryConstants/category.constants";
import {
  IconTrendingTopicSubCategory,
  iconSubAtPickCategories,
} from "../../pages/Forms/forms.contants";

const AccordianSubCategory = () => {
  const {
    category: selectCategory,
    subCategory: selectedSubCategory,
    urlSearchTerm,
    selectedCategoryLink,
    setSelectedSubCategory,
    subCategories,
    setSubCategories,
  } = useCategory();

  useEffect(() => {
    const filteredSubCategories = categoryConstants?.find((category) => {
      return category?.categoryLink === selectedCategoryLink?.categoryLink;
    })?.subCategories;

    setSubCategories(filteredSubCategories || []);
  }, [
    selectedCategoryLink?.categoryLink,
    setSubCategories,
    selectCategory,
    selectedCategoryLink,
  ]);

  return (
    <div>
      {selectCategory !== "icon" && (
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
              gap: "4px",
            }}
          >
            {subCategories?.map((subCategory, i) => (
              <NavLink
                to={`/category-data?category=${selectCategory}&subCategory=${
                  subCategory?.subCategoryLink
                }&searchTerm=${urlSearchTerm ? urlSearchTerm : ""}`}
                data-test={`${subCategory?.subCategoryName}`}
                key={i}
                className={`${
                  subCategory?.subCategoryLink === selectedSubCategory
                    ? "bg-[#ff0000] text-white "
                    : ""
                }  border p-1 rounded-md text-xs px-2 py-1  `}
                onClick={() =>
                  setSelectedSubCategory(subCategory?.subCategoryLink)
                }
              >
                {subCategory?.subCategoryName}
              </NavLink>
            ))}
          </AccordionDetails>
        </Accordion>
      )}

      {selectCategory == "icon" && (
        <Accordion elevation={0} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-sm lg:text-base"
          >
            At Pick
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            {iconSubAtPickCategories?.map((subCategory, i) => (
              <NavLink
                to={`/category-data?category=${selectCategory}&subCategory=${
                  subCategory?.subCategoryLink
                }&searchTerm=${urlSearchTerm ? urlSearchTerm : ""}`}
                data-test={`${subCategory?.subCategoryName}`}
                key={i}
                className={`${
                  subCategory?.subCategoryLink === selectedSubCategory
                    ? "bg-[#ff0000] text-white "
                    : ""
                }  border p-1 rounded-md text-xs px-1 py-1  `}
                onClick={() =>
                  setSelectedSubCategory(subCategory?.subCategoryLink)
                }
              >
                {subCategory?.subCategoryName}
              </NavLink>
            ))}
          </AccordionDetails>
        </Accordion>
      )}
      {selectCategory == "icon" && (
        <Accordion elevation={0} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-sm lg:text-base"
          >
            Trending Topic
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            {IconTrendingTopicSubCategory?.map((subCategory, i) => (
              <NavLink
                to={`/category-data?category=${selectCategory}&subCategory=${
                  subCategory?.subCategoryLink
                }&searchTerm=${urlSearchTerm ? urlSearchTerm : ""}`}
                data-test={`${subCategory?.subCategoryName}`}
                key={i}
                className={`${
                  subCategory?.subCategoryLink === selectedSubCategory
                    ? "bg-[#ff0000] text-white "
                    : ""
                }  border p-1 rounded-md text-xs px-1 py-1 `}
                onClick={() =>
                  setSelectedSubCategory(subCategory?.subCategoryLink)
                }
              >
                {subCategory?.subCategoryName}
              </NavLink>
            ))}
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default AccordianSubCategory;

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import useToolsAndSoftwareCategory from "../../Hooks/useToolsAndSoftware";

const AccourdianToolsAndSoftwareCategory = () => {
  const {
    category: selectedCategory ,
    urlSearchTerm,
    allCategory,
    setSelectedCategoryLink,
  } = useToolsAndSoftwareCategory();

  return (
    <div>
      <Accordion elevation={0} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-sm lg:text-base"
        >
          Category
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {allCategory?.map((category, i) => (
            <NavLink
              to={`/category-tools-and-software?category=${
                category?.categoryLink
              }&searchValue=${urlSearchTerm ? urlSearchTerm : ""}`}
              key={i}
              className={`${
                category?.categoryLink === selectedCategory
                  ? "bg-[#ff0000] text-white border-none"
                  : ""
              }  border px-2 py-1 rounded-md text-xs`}
              onClick={() => setSelectedCategoryLink(category)}
            >
              {category?.CategoryName}
            </NavLink>
          ))}
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
};

export default AccourdianToolsAndSoftwareCategory;

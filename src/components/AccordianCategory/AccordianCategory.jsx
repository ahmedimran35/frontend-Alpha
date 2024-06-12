import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useCategory from "../../Hooks/useCategory";
import { nanoid } from "nanoid";
import AccordianForAllCategory from "./AccordianCategoryComponents/AccordianForAllCategory";
import AccordianForEachCategory from "./AccordianCategoryComponents/AccordianForEachCategory";

const AccordianCategory = () => {
  // from context
  const {
    category: selectedCategory,
    urlSearchTerm,
    allCategory,
    setSelectedCategoryLink,
    setCurrentPage,
    refetch
  } = useCategory();

  const changeCategoryOrPageLimitHandler = () => {
    setCurrentPage(1);
    setSelectedCategoryLink("All");
  };

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
            gap: "4px",
          }}
        >
          <AccordianForAllCategory
            refetch={refetch}
            selectedCategory={selectedCategory}
            urlSearchTerm={urlSearchTerm}
            changeCategoryOrPageLimitHandler={changeCategoryOrPageLimitHandler}
          ></AccordianForAllCategory>
          {/* map rest of the accordian  */}
          {allCategory?.map((category) => (
            <AccordianForEachCategory
              key={nanoid()}
              selectedCategory={selectedCategory}
              urlSearchTerm={urlSearchTerm}
              setSelectedCategoryLink={setSelectedCategoryLink}
              category={category}
            ></AccordianForEachCategory>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordianCategory;

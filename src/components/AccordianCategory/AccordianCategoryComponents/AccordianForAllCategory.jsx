import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const AccordianForAllCategory = ({
  urlSearchTerm,
  selectedCategory,
  changeCategoryOrPageLimitHandler,
  refetch,
}) => {
  return (
    <NavLink
      to={`/category-data?category=All&searchTerm=${
        urlSearchTerm ? urlSearchTerm : ""
      }`}
      onClick={() => {
        changeCategoryOrPageLimitHandler();
        refetch();
      }}
      className={`${
        "All" === selectedCategory ? "bg-[#ff0000] text-white border-none" : ""
      }  border px-2 py-1 rounded-md text-xs`}
      data-test={`all-category`}
    >
      All
    </NavLink>
  );
};

AccordianForAllCategory.propTypes = {
  changeCategoryOrPageLimitHandler: PropTypes.func,
  selectedCategory: PropTypes.string,
  refetch: PropTypes.func,
  urlSearchTerm: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default AccordianForAllCategory;

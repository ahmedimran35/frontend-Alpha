import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../ScrollToTheTop/ScrollToTheTop";

const AccordianForEachCategory = ({
  category,
  selectedCategory,
  setSelectedCategoryLink,
  urlSearchTerm,
}) => {
  return (
    <NavLink
      to={`/category-data?category=${category?.categoryLink}&searchTerm=${
        urlSearchTerm ? urlSearchTerm : ""
      }`}
      className={`${
        category?.categoryLink === selectedCategory
          ? "bg-[#ff0000] text-white"
          : ""
      }  border rounded-md px-2 py-1 text-xs flex items-center justify-center`}
      onClick={() => {
        setSelectedCategoryLink(category);
        return <ScrollToTop />;
      }}
    >
      {category?.CategoryName}
    </NavLink>
  );
};

AccordianForEachCategory.propTypes = {
  category: PropTypes.object,
  selectedCategory: PropTypes.string,
  setSelectedCategoryLink: PropTypes.func,
  urlSearchTerm: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default AccordianForEachCategory;

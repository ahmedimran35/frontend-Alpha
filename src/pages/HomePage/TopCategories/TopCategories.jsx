import { NavLink } from "react-router-dom";
import H2Title from "../../../components/Titles/H2Title";
import Category from "./Category";
import categories from "./CategoryConstans";
const TopCategories = () => {
  return (
    <div
      className="mt-10 max-w-7xl mx-auto space-y-10 mb-40"
    >
      <H2Title baseText={"Top"} coloredText={"Categories"} />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-5"
      >
        {categories.map((category, index) => (
          <NavLink key={category?.id} to={category.link} data-test={`top-category-${index}`}>
            <Category category={category} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

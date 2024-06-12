import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useCategory from "../../Hooks/useCategory";
import { NavLink } from "react-router-dom";
import useToolsAndSoftwareCategory from "../../Hooks/useToolsAndSoftware";

const BreadCrumb = () => {
  const url = new URLSearchParams(location.search);
  const category = url.get("category");
  const urlSearchTerm = url.get("searchTerm");

  const {
    category: selectedCategory,
    setSelectedCategoryLink: setToolsAndSoftwareCategory,
    setCurrentPage: toolsCurrentPage,
  } = useToolsAndSoftwareCategory();

  const { allCategory, setSelectedCategoryLink, setCurrentPage } =
    useCategory();
  const breadcrumbs = [
    <span key="category" className="text-sm text-gray-400 ">
      Category
    </span>,
  ];
  const changeCategoryOrPageLimitHandler = () => {
    setCurrentPage(1);
    setSelectedCategoryLink("All");
  };

  const setAssetCategoryAndCurrentPageLimitHandler = (categorySingle) => {
    setSelectedCategoryLink(categorySingle);
    setCurrentPage(1);
  };

  const setToolsCategoryAndCurrentPageLimitHandler = (selectedCategory) => {
    setToolsAndSoftwareCategory(selectedCategory);
    toolsCurrentPage(1);
  };
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" style={{ color: "gray" }} />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
        <NavLink
          to={`/category-data?category=All&searchTerm=${
            urlSearchTerm ? urlSearchTerm : ""
          }`}
          onClick={() => changeCategoryOrPageLimitHandler()}
          className={`text-${
            "All" === category ? "[#ff0000]" : "gray-400"
          } text-sm`}
        >
          All
        </NavLink>
        {allCategory?.map((categorySingle) => (
          <NavLink
            key={categorySingle}
            to={`/category-data?category=${
              categorySingle?.categoryLink
            }&searchTerm=${urlSearchTerm ? urlSearchTerm : ""}`}
            onClick={() =>
              setAssetCategoryAndCurrentPageLimitHandler(categorySingle)
            }
            className={`text-${
              categorySingle?.categoryLink === category
                ? "[#ff0000]"
                : "gray-400"
            } text-sm`}
          >
            {categorySingle?.CategoryName}
          </NavLink>
        ))}

        <NavLink
          onClick={() =>
            setToolsCategoryAndCurrentPageLimitHandler(selectedCategory)
          }
          to="/category-tools-and-software?category=tools-and-softwares&searchValue="
          className={`text-${
            "tools-and-softwares" === category ? "[#ff0000]" : "gray-400"
          } text-sm`}
        >
          {" "}
          Softwares & Tools
        </NavLink>
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumb;

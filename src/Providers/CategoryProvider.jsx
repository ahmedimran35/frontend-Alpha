import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { createContext, memo, useEffect, useState } from "react";
import { categoryRootURLs } from "../utils/Constants/decryptedApiConstants/apiURL";
import categoryConstants from "../utils/Constants/CategoryConstants/category.constants";

export const CategoryContext = createContext();
const CategoryProvider = memo(function CategoryProviderComponent({ children }) {
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [selectedCategoryLink, setSelectedCategoryLink] = useState({});
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(50);
  const queryParams = new URLSearchParams(location.search);

  const category =
    queryParams.get("category") || location.pathname.split("/")[2] || "";
  const subCategory = queryParams.get("subCategory") || "";
  const urlSearchTerm = queryParams.get("searchTerm") || "";
  const axiosPublic = useAxiosPublic();
  // * Default pagination limit
  useEffect(() => {
    setAllCategory(categoryConstants);
    if (category === "icon") {
      setLimit(100);
    } else {
      setLimit(50);
    }
  }, [category]);
  // * Fetch Data from backend
  const {
    data: categoryBasedDatas = [],
    isLoading: isCategoryLoading,
    isFetching: isCategoryFetching,
    refetch,
  } = useQuery({
    queryKey: [
      "all-assets",
      category,
      subCategory,
      searchTerm,
      pageLimit,
      currentPage,
      urlSearchTerm,
    ],
    /**
     * Fetches data from the server based on the specified category, subcategory,
     * current page, page limit, and search term.
     *
     * @return {Promise<Object>} The response data from the server.
     */
    queryFn: async () => {
      setLoading(true);
      // find the url to fetch data
      let urlRefactored = `${categoryRootURLs[category]}?`;
      if (subCategory) {
        urlRefactored += `category=${category}&subCategory=${subCategory}`;
      } else if (category !== "All") {
        urlRefactored += `category=${category}`;
      }
      // add page limits
      urlRefactored += `&page=${currentPage}&limit=${pageLimit}&searchTerm=${urlSearchTerm}`;
      // ? Error Handler when called on other components
      // hence, root url will be undefined, return early
      if (urlRefactored.includes("undefined")) {
        return [];
      }
      const res = await axiosPublic.get(urlRefactored);
      setLoading(false);
      return res?.data;
    },
    // Configure caching behavior
    staleTime: 600000, // Refetch data after 6 minutes of inactivity
  });
  // all need values
  const categoryInfo = {
    allCategory,
    loading,
    selectedCategoryLink,
    setSearchTerm,
    setSelectedCategoryLink,
    setSelectedSubCategory,
    categoryBasedDatas,
    isCategoryLoading,
    isCategoryFetching,
    setSubCategories,
    category,
    subCategory,
    subCategories,
    urlSearchTerm,
    setCurrentPage,
    setLimit,
    pageLimit,
    currentPage,
    selectedSubCategory,
    refetch,
  };

  return (
    <CategoryContext.Provider value={categoryInfo}>
      {children}
    </CategoryContext.Provider>
  );
});

CategoryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CategoryProvider;

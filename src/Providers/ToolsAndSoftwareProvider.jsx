import PropTypes from "prop-types";
import { createContext, memo, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { softwareAndToolsRootURL } from "../utils/Constants/decryptedApiConstants/apiURL";
import softwareAndToolsCategory from "../constants/softwareAndTools.constants";

export const CategoryToolsAndSoftwareContext = createContext();

const ToolsAndSoftwareCategoryProvider = memo(
  function ToolsAndSoftwareProvider({ children }) {
    const allCategory = softwareAndToolsCategory;
    const [selectedCategoryLink, setSelectedCategoryLink] = useState({});
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const subCategory = queryParams.get("subCategory");
    const urlSearchTerm = queryParams.get("searchValue");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setLimit] = useState(30);
    const axiosPublic = useAxiosPublic();

    const {
      data: categoryBasedDatas = [],
      isLoading: isCategoryLoading,
      isFetching: isCategoryFetching,
    } = useQuery({
      queryKey: [
        "tools-and-software",
        subCategory,
        urlSearchTerm,
        pageLimit,
        currentPage,
      ],
      queryFn: async () => {
        let url = "";
        if (urlSearchTerm || subCategory) {
          url = `/${softwareAndToolsRootURL}?subCategories=${subCategory}&searchTerm=${searchTerm}&page=${currentPage}&limit=${pageLimit}`;
        } else {
          url = `/${softwareAndToolsRootURL}?page=${currentPage}&limit=${pageLimit}`;
        }
        const res = await axiosPublic.get(url);
        return res?.data?.data;
      },
      // Configure caching behavior
      staleTime: 100000, // Refetch data after 10 minute of inactivity
    });

    const categoryInfo = {
      allCategory,
      selectedCategoryLink,
      setSearchTerm,
      setSelectedCategoryLink,
      selectedSubCategory,
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
    };
    return (
      <CategoryToolsAndSoftwareContext.Provider value={categoryInfo}>
        {children}
      </CategoryToolsAndSoftwareContext.Provider>
    );
  }
);

ToolsAndSoftwareCategoryProvider.propTypes = {
  children: PropTypes.node,
};

export default ToolsAndSoftwareCategoryProvider;

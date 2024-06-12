import { useEffect } from "react";
import useCategory from "../../../Hooks/useCategory";
import ScrollToTop from "../../../components/ScrollToTheTop/ScrollToTheTop";
import { calculateNumberOfPages } from "../../../utils/Functions/Common/calculatePagination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
const FetchingCategoryPagination = () => {
  const {
    category,
    categoryBasedDatas,
    setCurrentPage,
    setLimit,
    pageLimit,
    currentPage,
  } = useCategory();
  const handleChange = (event) => {
    setLimit(event.target.value);
    window.scrollTo(0, 0);
  };

  // scroll to the top when changing filter for pagination
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageLimit, currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className=" flex justify-between items-center h-16 mt-2 rounded-md ">
      <ScrollToTop />
      <Pagination
        color="error"
        count={calculateNumberOfPages(
          categoryBasedDatas?.meta?.total,
          categoryBasedDatas?.meta?.limit
        )}
        onChange={handlePageChange}
        page={currentPage}
        variant="outlined"
        shape="rounded"
      />
      <div className=" ">
        <FormControl sx={{ m: 1, minWidth: 100 }} color="error" size="small">
          <InputLabel id="demo-select-small-label">Limit</InputLabel>
          {category === "icon" ? (
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={pageLimit}
              label="limit"
              onChange={handleChange}
            >
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          ) : (
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={pageLimit}
              label="limit"
              onChange={handleChange}
            >
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          )}
        </FormControl>
      </div>
    </div>
  );
};

export default FetchingCategoryPagination;

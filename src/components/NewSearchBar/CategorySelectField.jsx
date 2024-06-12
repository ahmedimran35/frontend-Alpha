import PropTypes from "prop-types";
import { FormControl, MenuItem, Select } from "@mui/material";
import { categories } from "../../utils/Constants/CategoryConstants/category.constants";
import { nanoid } from "nanoid";
import {
  selectFormSX,
  selectMenuProps,
} from "../../utils/Constants/NewSearchBar/NewSearchBarStyles";

const CategorySelectField = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div className="order-1">
      <FormControl sx={selectFormSX}>
        {/* <InputLabel id="category-label">Category</InputLabel> */}
        <Select
          labelId="category-label"
          id="category"
          value={selectedCategory} // label="Category"
          onChange={handleCategoryChange}
          inputProps={{
            MenuProps: selectMenuProps,
          }}
        >
          {categories?.map((category) => (
            <MenuItem
              className="bg-gray-400"
              key={nanoid()}
              value={category?.categoryLink}
              sx={{
                fontSize: {
                  xs: 12,
                  md: 14,
                },
                fontWeight: 400,
              }}
            >
              {category.CategoryName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

CategorySelectField.propTypes = {
  handleCategoryChange: PropTypes.func,
  selectedCategory: PropTypes.string,
};

export default CategorySelectField;

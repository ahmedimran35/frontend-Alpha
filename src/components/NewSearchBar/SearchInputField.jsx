import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import handleSearchTermChange from "../../utils/Functions/NewSearchBatFunctions/handleSearchTermChange";

const SearchInputField = ({ searchValue, setSearchValue }) => {
  return (
    <div className="order-2 rounded-md">
      <TextField
        placeholder="Search"
        variant="outlined"
        value={searchValue}
        onChange={() => handleSearchTermChange(event, setSearchValue)}
        sx={{
          width: {
            xs: 180,
            sm: 400,
            md: 450,
            lg: 500,
          },
          "& input::placeholder": {
            fontSize: {
              xs: 14,
              md: 16,
            },
          },
          "& .MuiOutlinedInput-root": {
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            height: {
              xs: 50,
              md: 60,
            },
            border: "2px solid #ff0000",
            ":hover": {
              border: "1px solid #fd0000 !important",
              boxShadow: "-1px 1px 4px 4px #FFEAEA",
            },
            ":focus-within": {
              border: "1px solid #fd0000 !important",
            },
          },
          "& .MuiOutlinedInput-root.Mui-disabled": {
            ":hover": {
              border: "2px solid #ff0000 !important",
              boxShadow: "none",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
    </div>
  );
};

SearchInputField.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchInputField;

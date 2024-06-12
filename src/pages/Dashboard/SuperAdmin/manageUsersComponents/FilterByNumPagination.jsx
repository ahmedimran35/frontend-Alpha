/**
 * This component renders filter options for user .
 *
 * @param {}
 * @returns {ReactNode} A React element that renders a input field for users to show number of users.
 */
import PropTypes from "prop-types"
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
const FiterByNumPagination = ({ pageLimit, handleChange }) => {
  return (
    <div className=" text-end">
      <FormControl
        color="error"
        sx={{
          m: 1,
          minWidth: 100,
        }}
        size="small"
      >
        <InputLabel id="demo-select-small-label">Limit</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={pageLimit}
          label="limit"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

FiterByNumPagination.propTypes = {
  handleChange: PropTypes.func,
  pageLimit: PropTypes.number
}

export default FiterByNumPagination;
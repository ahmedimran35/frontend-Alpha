import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const options = ["All", "Option 1", "Option 2", "Option 3"];

function SearchBarWithFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filter, setFilter] = React.useState(options[0]); // Default filter

  //   const data = [
  //     { id: 1, name: 'Item 1', type: 'Option 1' },
  //     { id: 2, name: 'Item 2', type: 'Option 2' },
  //     { id: 3, name: 'Item 3', type: 'Option 3' },
  //   ];

  //   const filteredData = data.filter((item) => {
  //     if (filter === 'All') return true; // Show all if filter is All
  //     return item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.type === filter;
  //   });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div
      style={{ display: "flex", outline: "none", border: "none" }}
      className=""
    >
      <FormControl style={{ minWidth: 120 }}>
        <Select
          value={filter}
          //   variant="outlined"
          onChange={handleFilterChange}
          label="Filter"
          style={{
            height: "100%",
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        // label="Search"
        placeholder="Search Here"
        value={searchTerm}
        variant="outlined"
        color="error"
        onChange={handleSearchChange}
        style={{
          marginRight: "10px",
        }}
        sx={{
          border: "none",
        }}
        fullWidth
        hiddenLabel
      />

      {/* Display filteredData here (e.g., in a list) */}
    </div>
  );
}

/**
 * <div className="relative">
      <form onSubmit={handleSearch} data-test="search">
        <input
          name="searchTerm"
          type="text"
          placeholder="Search Here..."
          className="w-[320px] md:w-[430px] lg:w-[630px] h-[60px] border-[#ff0000] rounded-full border-[3px] px-5 outline-none text-xl"
        />
        <button type="submit" data-test="enter">
          <CiSearch className="absolute text-[40px] text-white bg-[#ff0000] rounded-full p-1 transition duration-300 hover:bg-[#C21807] right-3 top-[10px] hover:cursor-pointer" />
        </button>
      </form>

      <div></div>
    </div>
 */

export default SearchBarWithFilter;

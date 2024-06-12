import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";

const SearchFieldForAuthorized = ({
  onSubmitHandler,
  searchTerm = "",
  searchErrMessage = "",
}) => {
  return (
    <form className="relative" onSubmit={onSubmitHandler}>
      <div className="flex items-center justify-end">
        <input
          defaultValue={searchTerm}
          type="text"
          name="searchTerm"
          placeholder="Search here..."
          className="border text-sm focus:border-[#ff0000]  focus:outline-none pl-2 h-10 w-80 rounded-md"
        />
      </div>
      <button type="submit" className="absolute top-[6px] right-1">
        <IoIosSearch className="text-[#ff0000] text-3xl " />
      </button>
      <span className={"text-red-500 text-sm"}>{searchErrMessage}</span>
    </form>
  );
};

SearchFieldForAuthorized.propTypes = {
  onSubmitHandler: PropTypes.func,
  searchErrMessage: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default SearchFieldForAuthorized;

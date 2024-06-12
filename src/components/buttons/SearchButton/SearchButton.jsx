import { SearchRounded } from "@mui/icons-material";
/**
 * * A Clickable Search Icon
 * @returns {ReactNode} render a search rounded button
 */
const SearchButton = () => {
  return (
    <div className="order-3 text-[#ff0000] rounded-full bg-white  -ml-14 z-10 left-[72.5%] hover:scale-105 hover:text-[#C21807]">
      <button type="submit" data-testid="search-btn">
        <SearchRounded
          sx={{
            fontSize: {
              xs: 28,
              sm: 32,
              md: 42,
            },
          }}
        />
      </button>
    </div>
  );
};

export default SearchButton;

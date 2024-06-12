import PropTypes from "prop-types";
const CategoryLoading = ({ category }) => {
  return (
    <div
      className={
        category === "icon"
          ? `ml-96 w-2/3 flex justify-center items-center h-96 mt-32`
          : `ml-80 w-2/3 flex justify-center items-center h-96 mt-32`
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        className="h-20 w-20"
        role="loading"
      >
        <path
          d="M7 8H3V16H7V8Z"
          className="animate animate-bounce fill-[#ff0000] "
        />
        <path
          d="M14 8H10V16H14V8Z"
          className="animate animate-bounce fill-[#ff0000] [animation-delay:.2s]"
        />
        <path
          d="M21 8H17V16H21V8Z"
          className="animate animate-bounce fill-[#ff0000] [animation-delay:.4s]"
        />
      </svg>
    </div>
  );
};

CategoryLoading.propTypes = {
  category: PropTypes.string,
};

export default CategoryLoading;

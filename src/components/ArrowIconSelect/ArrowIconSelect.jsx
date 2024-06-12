/**
 * A component for rendering ground arrow icon 
 * @returns a reacnode that renders a icon of arrow
 */
const ArrowIconSelect = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-[#ff0000] peer-disabled:cursor-not-allowed"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-labelledby="title-04 description-04"
        role="graphics-symbol"
      >
        <title id="title-04">Arrow Icon</title>
        <desc id="description-04">Arrow icon of the select list.</desc>
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
};

export default ArrowIconSelect;
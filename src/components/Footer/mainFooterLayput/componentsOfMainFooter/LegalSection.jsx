import PropTypes from "prop-types"
import { Link } from "react-router-dom";
function LegalSection({ pages }) {
  return (
    <div className="w-1/3 p-7 ">
      <h3 className="text-lg lg:text-xl uppercase">Legal</h3>
      <div className="w-[300px] md:w-fit flex flex-row flex-wrap md:flex-col text-xs lg:text-sm gap-5 md:gap-1 items-start my-2 md:my-7 ">
        {pages?.map((page) => (
          <Link
            key={page?._id}
            to={`/${page?.pageName}`}
            className="text-[#d4d3d3] hover:text-[#fff] hover:font-semibold transition-colors duration-300"
          >
            {page?.pageName}
          </Link>
        ))}
      </div>
    </div>
  );
}

LegalSection.propTypes = {
  pages: PropTypes.array
}

export default LegalSection;

import PropTypes from "prop-types"
import { Link } from "react-router-dom";
function SupportSection({ pages }) {
  return (
    <div className="w-1/3 p-7">
      <h3 className="text-lg lg:text-xl uppercase font-medium">Support</h3>
      <div className="w-[250px] md:w-fit flex flex-row flex-wrap md:flex-col text-xs lg:text-sm gap-5 md:gap-1 items-start my-2 md:my-7 text-[#d4d3d3]">       
        <Link
          to="/59bda3f8ee98128d543572e0d29f27ad5343f0c88c36e7bf4672c4c3ab6245b4"
          className="text-[#d4d3d3] hover:text-[#fff] hover:font-semibold transition-colors duration-300"
        >
          Feedback
        </Link>
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

SupportSection.propTypes = {
  pages: PropTypes.array
}

export default SupportSection;

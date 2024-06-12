import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PlusIconSVG from "../../../PlusIconSVG/PlusIconSVG";

const ResSupportLinks = ({ supportPages }) => {
  return (
    <details className="group p-4">
      <summary className="relative cursor-pointer list-none pr-8 font-medium text-[#d4d3d3] transition-colors duration-300 focus-visible:outline-none group-hover:text-[#fff] hover:font-semibold [&::-webkit-details-marker]:hidden  mb-3">
        Support
        <PlusIconSVG />
      </summary>
      <Link
        to="/feedback"
        className="text-[#d4d3d3] hover:text-[#fff] hover:font-semibold transition-colors duration-300"
      >
        Feedback
      </Link>
      {supportPages?.map((page) => (
        <Link
          key={page?._id}
          to={`/${page?.pageName}`}
          className="text-[#d4d3d3] hover:text-[#fff] hover:font-semibold transition-colors duration-300 flex gap-5 mb-3 mt-3"
        >
          {page?.pageName}
        </Link>
      ))}
    </details>
  );
};

ResSupportLinks.propTypes = {
  supportPages: PropTypes.array,
};

export default ResSupportLinks;

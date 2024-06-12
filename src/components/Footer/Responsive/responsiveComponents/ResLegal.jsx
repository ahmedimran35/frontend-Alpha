import PropTypes from "prop-types";
import PlusIconSVG from "../../../PlusIconSVG/PlusIconSVG";
import { Link } from "react-router-dom";

const ResLegal = ({ legalPages }) => {
  return (
    <details className="group p-4">
      <summary className="relative cursor-pointer list-none pr-8 font-medium text-[#d4d3d3] transition-colors duration-300 focus-visible:outline-none group-hover:text-[#fff] hover:font-semibold [&::-webkit-details-marker]:hidden  mb-3">
        Legal
        <PlusIconSVG />
      </summary>

      {legalPages?.map((page) => (
        <Link
          key={page?._id}
          to={`/${page?.pageName}`}
          className="text-[#d4d3d3] hover:text-[#fff] hover:font-semibold transition-colors duration-300 flex gap-5 mb-3"
        >
          {page?.pageName}
        </Link>
      ))}
    </details>
  );
};

ResLegal.propTypes = {
  legalPages: PropTypes.array,
};

export default ResLegal;

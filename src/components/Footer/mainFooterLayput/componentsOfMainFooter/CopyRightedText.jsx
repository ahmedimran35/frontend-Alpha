import PropTypes from "prop-types"
const CopyRightedText = ({ currentYear}) => {
    return (
        <div className=" md:w-1/3 my-auto text-center text-sm lg:text-base">
          <p className="text-xs">
            Copyright © {currentYear} YT Shops, Build By OctopusX LLC. All
            Rights Reserved.
          </p>
        </div>
      );
};

CopyRightedText.propTypes = {
  currentYear: PropTypes.number
}

export default CopyRightedText;
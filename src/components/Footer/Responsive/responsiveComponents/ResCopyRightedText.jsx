import PropTypes from "prop-types";

const ResCopyRightedText = ({ currentYear }) => {
  return (
    <div className="py-4 text-center text-sm text-white mx-1">
      <p className=" text-xs">
        Copyright © {currentYear} YT Shops, Build By OctopusX LLC. All Rights
        Reserved.
      </p>
    </div>
  );
};

ResCopyRightedText.propTypes = {
  currentYear: PropTypes.number,
};

export default ResCopyRightedText;

import PropTypes from "prop-types";
/**
 * Re
 * @param {string} baseText
 * @param {string} coloredText
 * @returns {ReactNode} a render componet
 */
const SubTitle = ({ baseText, coloredText }) => {
  return (
    <h2 className="text-3xl font-semibold text-[#000] ">
      {baseText} <span className="text-[#ff0000]">{coloredText}</span>
    </h2>
  );
};

SubTitle.propTypes = {
  baseText: PropTypes.string,
  coloredText: PropTypes.string,
};

export default SubTitle;

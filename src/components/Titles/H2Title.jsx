import PropTypes from "prop-types";
const H2Title = ({ baseText, coloredText }) => {
  return (
    <h2 className="text-3xl md:text-4xl text-center font-bold text-[#000] ">
      {baseText} <span className="text-[#ff0000]">{coloredText}</span>
    </h2>
  );
};

H2Title.propTypes = {
  baseText: PropTypes.string,
  coloredText: PropTypes.string
}

export default H2Title;

import PropTypes from "prop-types"
const PrimaryButtonSmaill = ({ text }) => {
  return (
    <button className="inline-flex items-center justify-center px-3 py-2 md:px-4 md:py-[10px] bg-[#ff0000] hover:bg-white text-xs md:text-[12px] border-[1px] border-[#ff0000] lg:text-[15px] font-medium tracking-wide text-white hover:text-[#ff0000]  transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap  hover:shadow-2xl uppercase hover:cursor-pointer">
      {text}
    </button>
  );
};

PrimaryButtonSmaill.propTypes = {
  text: PropTypes.string
}

export default PrimaryButtonSmaill;

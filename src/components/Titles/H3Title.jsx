import PropTypes from "prop-types"
function H3Title({ text }) {
    return (
      <h3 className="uppercase text-[16px] md:text-lg font-[500] mb-4 text-[#757575]">
        {text}
      </h3>
    );
}

H3Title.propTypes = {
  text: PropTypes.string
}

export default H3Title;
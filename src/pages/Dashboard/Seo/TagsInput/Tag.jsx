import PropTypes from "prop-types";

function Tag({ onDeleteTag, value }) {
  const tag = (
    <span className="bg-[#ff0000] w-fit text-white px-1 lg:px-2 rounded-lg py-1">
      {value}
      <span
        onClick={(e) => onDeleteTag(e, value)}
        className="pl-1 hover:cursor-pointer"
      >
        &#x2716;
      </span>
    </span>
  );
  return <>{tag}</>;
}

Tag.propTypes = {
  onDeleteTag: PropTypes.func,
  value: PropTypes.string,
};

export default Tag;

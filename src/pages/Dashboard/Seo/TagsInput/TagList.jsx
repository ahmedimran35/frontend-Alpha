import PropTypes from "prop-types";
import Tag from "./Tag";

function TagList({ tags, onDeleteTag, setTags }) {
  const tagsUI = tags?.map((tag) => {
    return (
      <Tag
        onDeleteTag={() => onDeleteTag(tags, tag, setTags)}
        key={tag}
        value={tag}
      />
    );
  });

  return (
    <span className="flex gap-1 justify-center items-center ">{tagsUI}</span>
  );
}

TagList.propTypes = {
  onDeleteTag: PropTypes.func,
  setTags: PropTypes.func,
  tags: PropTypes.array,
};

export default TagList;

import PropTypes from "prop-types";
import TagList from "./TagList";

function InputTag({
  defaultTags,
  onAddTag,
  onDeleteTag,
  placeholder,
  setTags,
  setTagsErrorMessage,
}) {
  const onKeyUp = (e) => {
    if (e.which === 32 || e.which === 13) {
      setTagsErrorMessage("");
      const input = e.target.value.split(",");
      // check for spaces
      const pattern = /^(?!\s)[a-zA-Z\s]+$/gm;
      const result = pattern.test(input[0]);
      if (result === false) {
        setTagsErrorMessage("Only characters are allowed, no leading spaces.");
        return;
      }
      const tag = input[0];
      if (input.length === 0 || tag === "" || tag.length > 10) {
        setTagsErrorMessage("Maximum 10 characters are allowed.");
        return;
      }

      onAddTag(defaultTags, tag, setTags, setTagsErrorMessage);

      e.target.value = "";
    }
  };

  return (
    <section>
      <div className="border border-slate-300 hover:border-[#ff0000] min-h-10 mx-auto lg:mx-0 lg:w-full rounded text-slate-500 px-2 py-[1px] my-1 lg:my-0 flex flex-wrap gap-1 text-xs">
        <TagList
          tags={defaultTags}
          onDeleteTag={onDeleteTag}
          setTags={setTags}
        />
        <input
          onKeyUp={(e) => onKeyUp(e)}
          type="text"
          title={placeholder}
          placeholder={placeholder}
          className="w-1/4 lg:w-3/6 outline-none inline py-2 overflow-hidden placeholder-zinc-800"
        />
        {defaultTags.length > 0 ? (
          ""
        ) : (
          <p className="text-xs pl-2 pt-2 text-slate-400">
            press space to create tag
          </p>
        )}
      </div>
      {/* <div>error</div> */}
    </section>
  );
}

InputTag.propTypes = {
  defaultTags: PropTypes.array,
  inputClass: PropTypes.string,
  onAddTag: PropTypes.func,
  onDeleteTag: PropTypes.func,
  placeholder: PropTypes.string,
  setTags: PropTypes.func,
  setTagsErrorMessage: PropTypes.func,
};

export default InputTag;

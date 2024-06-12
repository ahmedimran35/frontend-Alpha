export const onAddTag = (tags, tag, setTags, setTagsErrorMessage) => {
  if (tags.length < 5) {
    if (tags.includes(tag)) {
      setTagsErrorMessage("Can't use same tag twice.");
      return;
    }
    setTags([...tags, tag]);
  } else {
    setTagsErrorMessage("Maximum 5 tags are allowed");
  }
};

export const onDeleteTag = (tags, tag, setTags) => {
  let remainingTags = tags?.filter((t) => {
    return t !== tag;
  });

  setTags([...remainingTags]);
};

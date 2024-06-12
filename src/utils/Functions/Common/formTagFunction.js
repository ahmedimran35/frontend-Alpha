export const addFormTags = (tag, tags, setTags) => {
    if (tags.length < 3) {
        setTags([...tags, tag]);
      }
}
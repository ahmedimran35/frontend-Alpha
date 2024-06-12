export const RemoveSpaces = (text) => {
  /*
   * Remove Spaces
   * Example text is "   Mango       "
   * trim funcation retune "Mango" remove left and right spaces
   */
  text = text.trim();

  /*
   * Remove Extra Spaces
   * Example text is "   Mango      eating        morning "
   * replace funcation using regex retune "Mango eating morning" remove left and right spaces
   */
  text = text.replace(/\s+/g, " ");
  return text;
};

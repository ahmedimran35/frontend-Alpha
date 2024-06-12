/**
 * * A function to validate if file uploaded is correct formate
 * @param {fileInput} psdPreviewFile file upload in zip
 * @param {fucntion} setMessagePrev set a error message
 * @returns {Boolean} true or false value to see uploaded file is correct format
 */
function validateFile(file, setMessagePrev, update = false) {
  setMessagePrev("");
  // find file types
  const fileTypeOfPreview = file[0] ? file[0].type.split("/")[1] : "none";
  if (fileTypeOfPreview === "none") {
    if (!update) {
      setMessagePrev("No file is chosen");
    }
    return "none";
  }
  const previewFileTypes = ["png", "jpg", "jpeg", "svg", "webp"];

  //? check if they are valid files
  const previewFileValid = previewFileTypes.includes(fileTypeOfPreview);

  // ? Set error messages for wrong file input
  if (previewFileValid === false) {
    setMessagePrev(
      `Only png, jpg, jpeg, svg and webp file type is accepted! Your file type is: ${fileTypeOfPreview}`
    );
  }

  return previewFileValid;
}

export default validateFile;

/**
 * * A function to validate if file uploaded is correct formate
 * @param {fileInput} psdPreviewFile file upload in zip
 * @param {fucntion} setMessagePrev set a error message
 * @returns {Boolean} true or false value to see uploaded file is correct format
 */
function validateBulkIcon(file, setMessage) {
  setMessage("");
  // find file types
  const fileTypeOfPreview = file ? file.type.split("/")[1] : "none";

  if (fileTypeOfPreview === "none") {
    setMessage("No file is chosen");
    return "none";
  }
  const previewFileTypes = ["png", "jpg", "jpeg", "svg", "webp"];

  //? check if they are valid files
  const previewFileValid = previewFileTypes.includes(fileTypeOfPreview);

  // ? Set error messages for wrong file input
  if (previewFileValid === false) {
    setMessage("Only png, jpg, jpeg, svg and webp file type is accepted.");
  } else {
    setMessage("");
  }

  return previewFileValid;
}

export default validateBulkIcon;

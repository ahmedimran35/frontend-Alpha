/**
 * * A function to validate if file uploaded is zip
 * @param {fileInput} choosenFile file upload in zip
 * @param {fucntion} setMessageZip set a error message
 * @returns {Boolean} true or false value to see uploaded file is zip
 */
function validateZipFile(
  choosenFile,
  setMessageZip,
  type = "zip",
  update = false
) {
  setMessageZip("");

  // find file types
  const fileTypeOfDesign = choosenFile[0]
    ? choosenFile[0].type.split("/")[1]
    : "none";
  // no file is chosen
  if (fileTypeOfDesign === "none") {
    if (!update) {
      setMessageZip("No file is chosen!");
    }
    return "none";
  }

  const zipFiletypes = ["x-zip-compressed", "zip-compressed", "zip", "x-zip"];
  const eligibleFileTypes = [...zipFiletypes, type];

  //? check if they are valid files
  const zipFileValid = eligibleFileTypes.includes(fileTypeOfDesign);

  // ? Set error messages for wrong file input
  if (zipFileValid === false) {
    setMessageZip(
      `Invalid File Type, Only Zip ${
        type === "pdf" ? "and pdf files are" : "file is"
      }  accepted.`
    );
  }

  return zipFileValid;
}

export default validateZipFile;

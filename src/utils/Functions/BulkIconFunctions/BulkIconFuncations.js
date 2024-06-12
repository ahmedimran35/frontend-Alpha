import { Toast } from "../../../constants/toast";
import validateBulkIcon from "../ValidateFunctions/validateBulkIcon";

export const bulkIconInputFiledValidation = (formData, setIconLoading) => {
  let isValidInput = true;

  const regex = /^(?!\s)[a-zA-Z\s,:-]+$/g;

  formData.forEach((data) => {
    if (
      (!data.title.match(regex) ||
        data.title.length < 1 ||
        data.title.length > 70) &&
      data.title
    ) {
      Toast.fire({
        icon: "error",
        title: "Filed Validation",
        text: "Invalid Title format",
      });
      setIconLoading(false);
      return (isValidInput = false);
    } else if (
      !data.metaTitle.match(regex) ||
      data.metaTitle.length < 5 ||
      data.metaTitle.length > 70
    ) {
      Toast.fire({
        icon: "error",
        title: "Filed Validation",
        text: "Invalid Meta Title format",
      });
      setIconLoading(false);
      return (isValidInput = false);
    } else if (
      !data.alternativeText.match(regex) ||
      data.alternativeText.length < 5 ||
      data.alternativeText.length > 70
    ) {
      Toast.fire({
        icon: "error",
        title: "Filed Validation",
        text: "Invalid Alternative Text format",
      });
      setIconLoading(false);
      return (isValidInput = false);
    } else if (
      !data.metaDescription.match(regex) ||
      data.metaDescription.length < 5 ||
      data.metaDescription.length > 160
    ) {
      Toast.fire({
        icon: "error",
        title: "Filed Validation",
        text: "Invalid Meta Description format",
      });

      setIconLoading(false);
      return (isValidInput = false);
    }
  });

  return isValidInput;
};

export const bulkIconEmptyInputFiledValidation = (
  formData,
  setSubmitted,
  setIconLoading
) => {
  let notEmptyFiled = true;

  const hasEmptyFiled = formData.some(
    (data, index) =>
      !data.title ||
      !data.category ||
      Object.values(formData[index].tags).every((tag) => tag == "") ||
      !data.metaTitle ||
      !data.metaDescription ||
      !data.alternativeText
  );

  if (hasEmptyFiled) {
    setSubmitted(true);
    setIconLoading(false);
    Toast.fire({
      icon: "error",
      title: "InCompleted Input Filed",
    });
    return (notEmptyFiled = false);
  } else if (formData.length == 1) {
    setSubmitted(true);
    setIconLoading(false);
    Toast.fire({
      icon: "error",
      title: "Bulk Upload Error",
      text: "Please upload at least two files to proceed with the bulk upload.",
    });
    return (notEmptyFiled = false);
  }
  return notEmptyFiled;
};

export const handleFileChange = (e, setFiles, user, setFormData) => {
  const filesArray = Array.from(e.target.files);
  setFiles(filesArray);
  const formDataArray = filesArray.map((file) => ({
    file,
    title: "",
    category: "icon",
    metaTitle: "",
    alternativeText: "",
    metaDescription: "",
    tags: { tag1: "", tag2: "", tag3: "", tag4: "", tag5: "" },
    style: "main",
    subCategory: "ai",
    uploadedUserEmail: user?.email,
    preview: URL.createObjectURL(file),
  }));
  setFormData(formDataArray);
};

export const bulkIconFileValidation = (
  files,
  setMessage,
  message,
  setIconLoading
) => {
  let isValidFile = true;
  const allFileTypes = [];

  files?.map((file) => {
    const isFileTYpe = validateBulkIcon(file, setMessage);

    allFileTypes.push(isFileTYpe);
    const allCorrectFileIsTrue = allFileTypes.every(
      (singleFileType) => singleFileType === true
    );

    if (allCorrectFileIsTrue) {
      isValidFile = true;
    } else {
      isValidFile = false;
      setIconLoading(false);
      Toast.fire({
        icon: "error",
        title: "File Validation",
        text: `Only png, jpg, jpeg, svg and webp file type is accepted.`,
      });
    }
  });

  return isValidFile;
};

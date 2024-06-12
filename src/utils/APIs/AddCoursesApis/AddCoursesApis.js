import { errorAlert } from "../../../components/Alert/errorAlert";
import { successAlert } from "../../../components/Alert/successAlert";
import { courseAndLearningRootURL } from "../../Constants/decryptedApiConstants/apiURL";

export const addCoursesApiCall = async (axiosSecure, fileData) => {
  try {
    const { data } = await axiosSecure.post(
      `${import.meta.env.VITE_axiosPublic}/${courseAndLearningRootURL}/insert`,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    successAlert("File Uploaded to Courses and Learning");

    return data;
  } catch (error) {
    errorAlert(error?.message);
  }
};

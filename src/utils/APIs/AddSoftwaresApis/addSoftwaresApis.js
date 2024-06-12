import { errorAlert } from "../../../components/Alert/errorAlert";
import { successAlert } from "../../../components/Alert/successAlert";
import { softwareAndToolsRootURL } from "../../Constants/decryptedApiConstants/apiURL";

export const addSoftwaresApiCall = async (axiosSecure, fileData) => {
  try {
    const { data } = await axiosSecure.post(
      `${import.meta.env.VITE_axiosPublic}/${softwareAndToolsRootURL}/insert`,
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
    errorAlert("Failed to Add Software and Tools");
  }
};

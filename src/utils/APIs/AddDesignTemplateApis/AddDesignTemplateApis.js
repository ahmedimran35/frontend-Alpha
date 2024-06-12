import { errorAlert } from "../../../components/Alert/errorAlert";
import { successAlert } from "../../../components/Alert/successAlert";
import { designTemplateRootURL } from "../../Constants/decryptedApiConstants/apiURL";

export const addDesignTemplateApiCall = async (
  // navigate,
  axiosSecure,
  fileData
) => {
  try {
    const { data } = await axiosSecure.post(
      `${import.meta.env.VITE_axiosPublic}/${designTemplateRootURL}/insert`,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    successAlert("File Uploaded to Design Template");
    // navigate("/");
    return data;
  } catch (error) {
    // errorAlert("Failed to Add Design Template");
    errorAlert(error?.message);
  }
};

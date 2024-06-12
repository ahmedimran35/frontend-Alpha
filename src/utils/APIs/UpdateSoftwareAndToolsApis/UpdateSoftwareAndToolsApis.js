import { errorAlert } from "../../../components/Alert/errorAlert";
import { softwareAndToolsRootURL } from "../../Constants/decryptedApiConstants/apiURL";

export const updateSoftwaresAndToolsApiCall = async (
  axiosSecure,
  formData,
  toolsId
) => {
  try {
    const { data } = await axiosSecure.patch(
      `${
        import.meta.env.VITE_axiosPublic
      }/${softwareAndToolsRootURL}/${toolsId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // successAlert("File Updated to Courses and Learning");

    return data;
  } catch (error) {
    errorAlert("Failed to update Software and Tools");
  }
};

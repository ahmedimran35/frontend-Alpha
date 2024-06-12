import { errorAlert } from "../../../components/Alert/errorAlert";
import { successAlert } from "../../../components/Alert/successAlert";
import { iconRootURL } from "../../Constants/decryptedApiConstants/apiURL";

export const addIconApiCall = async (axiosSecure, formData) => {
  try {
    const { data } = await axiosSecure.post(
      `${import.meta.env.VITE_axiosPublic}/${iconRootURL}/insert`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    successAlert("File Uploaded to Icon");
    return data;
  } catch (error) {
    errorAlert(error?.message);
  }
};

export const updateIconApiCall = async (axiosSecure, formData, id) => {
  try {
    const { data } = await axiosSecure.patch(
      `${import.meta.env.VITE_axiosPublic}/${iconRootURL}/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    successAlert("Icon Updated Successfully");
    return data;
  } catch (error) {
    errorAlert(error?.message);
  }
};

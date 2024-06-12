import { errorAlert } from "../../../components/Alert/errorAlert";
import { successAlert } from "../../../components/Alert/successAlert";
import { stockPhotosRootURL } from "../../Constants/decryptedApiConstants/apiURL";

export const addStockPhotosApiCall = async (axiosSecure, fileData) => {
  try {
    const { data } = await axiosSecure.post(
      `${import.meta.env.VITE_axiosPublic}/${stockPhotosRootURL}/insert`,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    successAlert("File Uploaded to Stock Photos");

    return data;
  } catch (error) {
    errorAlert(error?.message);
  }
};

export const updateStockPhotosApiCall = async (axiosSecure, formData, id) => {
  try {
    const { data } = await axiosSecure.patch(
      `${import.meta.env.VITE_axiosPublic}/${stockPhotosRootURL}/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    successAlert("Stock Photo Updated Successfully");
    return data;
  } catch (error) {
    errorAlert(error?.message);
  }
};

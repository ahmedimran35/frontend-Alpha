import axios from "axios";
import { errorAlert } from "../../../components/Alert/errorAlert";
import { downloadRootURL } from "../../Constants/decryptedApiConstants/apiURL";

export const isDownloadExitsAssetAPIcall = async (...params) => {
  const { assets, userEmail, bucketName, setLoading } = params[0];
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_axiosPublic}/${downloadRootURL}/${bucketName}`,
      {
        assets,
        userEmail,
      }
    );
    return result;
  } catch (error) {
    setLoading(false);
    errorAlert(error?.response?.data?.message);
  }
};

export const downloadAssetAPIcall = async (key, bucketName) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_axiosPublic
    }/${downloadRootURL}/download-file/${key}/${bucketName}`,
    { responseType: "blob" }
  );
  return response;
};

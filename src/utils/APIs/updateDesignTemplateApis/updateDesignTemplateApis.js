import { errorAlert } from "../../../components/Alert/errorAlert";

export const updateDesignTemplateApiCall = async (...params) => {
  const [axiosSecure, designTemplateRootURL, assetId, fileData] = params;

  try {
    const { data } = await axiosSecure.patch(
      `${import.meta.env.VITE_axiosPublic}/${designTemplateRootURL}/${assetId}`,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    errorAlert(error?.message);
  }
};

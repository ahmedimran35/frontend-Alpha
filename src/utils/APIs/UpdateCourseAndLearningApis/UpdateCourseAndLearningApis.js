import { errorAlert } from "../../../components/Alert/errorAlert";

export const updateCourseAndLearningApiCall = async (...params) => {
  const [axiosSecure, courseAndLearningRootURL, assetId, fileData] = params;

  try {
    const { data } = await axiosSecure.patch(
      `${
        import.meta.env.VITE_axiosPublic
      }/${courseAndLearningRootURL}/${assetId}`,
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

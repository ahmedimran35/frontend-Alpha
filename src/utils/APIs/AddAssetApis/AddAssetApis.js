import { errorAlert } from "../../../components/Alert/errorAlert";

export const addAssetApiCall = async (axiosSecure, formData, setLoading) => {
  try {
    setLoading(true);
    const { data } = await axiosSecure.post(
      `${
        import.meta.env.VITE_axiosPublic
      }/8bf729ffe074caee622c02928173467e658e19e28233cff8a445819e3cae4d50/insert`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading(false);
    return data;
  } catch (error) {
    errorAlert("Something Went Wrong");
    setLoading(false);
  }
};

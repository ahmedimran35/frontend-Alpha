/***
 *
 *
 *
 */
import { addAssetApiCall } from "../../APIs/AddAssetApis/AddAssetApis";
import { successAlert } from "../../../components/Alert/successAlert";
import { errorAlert } from "../../../components/Alert/errorAlert";

export const assetUploadToDB = async (
  axiosSecure,
  formData,
  setLoading,
  reset
) => {
  try {
    setLoading(true)
    // api call for add asset
    const assetUploadData = await addAssetApiCall(
      axiosSecure,
      formData,
      setLoading
    );
    if (assetUploadData?.success) {
      setLoading(false);
      reset();
      successAlert(assetUploadData?.message);

    }
  } catch (error) {
    setLoading(false);
    reset();

    // The ERROR Message has to be changed by Mamun Bhai. He'll Handle it globally from backend!
    errorAlert("Something Went Wrong");
  }
};

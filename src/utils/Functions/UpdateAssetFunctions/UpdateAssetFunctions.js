import { errorAlert } from "../../../components/Alert/errorAlert";

export const assetUpdateToDb = async (data, setTags) => {
  try {
    const assetUpdateResponse = data?.data;
    const defaultTags = Object?.values(assetUpdateResponse?.tags) ?? []; // Use default if tags are missing
    setTags(defaultTags);
    return {
      title: assetUpdateResponse?.title ?? "",
      metaTitle: assetUpdateResponse?.metaTitle ?? "",
      category: assetUpdateResponse?.category ?? "",
      subCategory: assetUpdateResponse?.subCategory ?? "",
    };
  } catch (error) {
    errorAlert("Failed to Update Asset");
  }
};

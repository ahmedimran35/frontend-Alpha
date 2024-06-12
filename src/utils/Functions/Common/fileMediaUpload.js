export const fileMediaUploadData = async (
  asset,
  assetFile,
  previewFile = null
) => {
  const assestData = JSON.stringify(asset);
  const formData = new FormData();

  if (assetFile) {
    formData.append("asset-file", assetFile[0]);
  }

  if (previewFile) {
    formData.append("preview-file", previewFile[0]);
  }

  formData.append("data", assestData);

  return formData;
};

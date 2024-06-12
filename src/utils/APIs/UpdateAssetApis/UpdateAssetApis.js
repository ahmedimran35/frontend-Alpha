export const updateAssetApiCall = async (axiosSecure, assetId) => {
   const assetUpdateApiResponse = await axiosSecure.get(
      `/8bf729ffe074caee622c02928173467e658e19e28233cff8a445819e3cae4d50/details-check-by-seo/${assetId}`
    );

    return assetUpdateApiResponse;
}
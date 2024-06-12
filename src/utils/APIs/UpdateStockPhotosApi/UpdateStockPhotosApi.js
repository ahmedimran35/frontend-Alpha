import axios from "axios";

export const updateStockPhotosApiCall = async (assetId, fileData) => {
  try {
    const { data } = await axios.patch(
      `${
        import.meta.env.VITE_axiosPublic
      }/f82b713907270eab5855d595ef189a606b38eb900c9e2090ff7122f0609a207f/${assetId}`,
      fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error) {
    // console.log(error);
  }
};

import axios from "axios";
import Swal from "sweetalert2";

const downloadZipFile = async (
  key,
  originalFileName,
  downloadRootURL,
  assetId,
  userEmail,
  setLoading,
  category
) => {
  try {
    setLoading(true);
    // split key
    let finalDownloadKey;
    const modifyKey = key.split("/")[1];
    if (modifyKey) {
      finalDownloadKey = modifyKey;
    } else {
      finalDownloadKey = key;
    }

    const response = await axios.post(
      `${import.meta.env.VITE_axiosPublic}/${downloadRootURL}/${category}`,
      {
        assets: assetId,
        userEmail: userEmail,
      }
    );

    if (response?.status === 200) {
      const blobResponse = await axios({
        method: "GET",
        url: `${
          import.meta.env.VITE_axiosPublic
        }/${downloadRootURL}/download-file/${finalDownloadKey}/${category}`,
        responseType: "blob",
      });

      if (blobResponse) {
        setLoading(false);
        const url = window.URL.createObjectURL(new Blob([blobResponse.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${originalFileName}.zip`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  } catch (error) {
    setLoading(false);
    Swal.fire({
      title: `${
        error?.response?.data?.message !== "undefine"
          ? error?.response?.data?.message
          : "Something Is Wrong"
      }`,
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#ff0000",
    });
  }
};

export default downloadZipFile;

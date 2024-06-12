import axios from "axios";
import Swal from "sweetalert2";

const downloadHandler = async (
  publicId,
  assetId,
  originalFileName,
  downloadRootURL,
  imageDownload,
  setLoading,
  user,
  category
) => {
  try {
    setLoading(true);

    // checking if already downloaded or not
    const result = await axios.post(
      `${import.meta.env.VITE_axiosPublic}/${downloadRootURL}/${category}`,
      {
        assets: assetId,
        userEmail: user?.email,
      }
    );

    // download cloudinary
    if (result?.status == 200) {
      const response = await axios.get(
        `${
          import.meta.env.VITE_axiosPublic
        }/${downloadRootURL}/${imageDownload}/${publicId}`,
        {
          responseType: "blob",
        }
      );

      // Extract filename from content-disposition header if it exists
      const contentDisposition = response.headers["content-disposition"];
      const filenameMatch = contentDisposition
        ? contentDisposition.match(/filename="(.+)"/)
        : null;
      let filename = filenameMatch ? filenameMatch[1] : originalFileName;

      // Extract file extension from content-type header
      const contentType = response.headers["content-type"];
      const fileExtensionMatch = contentType
        ? contentType.match(/\/([a-zA-Z0-9]+)$/)
        : null;

      const fileExtension = fileExtensionMatch ? fileExtensionMatch[1] : "ext";

      // Combine filename and file extension
      filename += `.${fileExtension}`;

      // Create a temporary URL for the image blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary <a> element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }

    setLoading(false);
  } catch (error) {
    setLoading(false);
    Swal.fire({
      title: `${error?.response?.data?.message}.`,
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#ff0000",
    });
  }
};

export default downloadHandler;

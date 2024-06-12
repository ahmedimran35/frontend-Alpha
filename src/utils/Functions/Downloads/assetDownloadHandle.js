export const handleDownloadResponse = (response, originalFileName) => {
  const filename = getFilenameFromResponse(response, originalFileName);
  createAndTriggerDownload(response, filename);
};

const getFilenameFromResponse = (response, originalFileName) => {
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

  const fileExtension = fileExtensionMatch ? fileExtensionMatch[1] : "png";

  // Combine filename and file extension
  return `${filename}.${fileExtension}`;
};

const createAndTriggerDownload = (response, filename) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();

  // Clean up
  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);
};

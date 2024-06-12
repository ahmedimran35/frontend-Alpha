import browseAllSectionPhoto from "/browseAllSectionPhoto.webp";

function BASPhoto() {
  return (
    <img
      data-test="browse-section-image"
      src={browseAllSectionPhoto}
      alt="Browser All Category"
      loading="lazy"
      className="h-[200px] w-[350px] lg:h-[330px] lg:w-[550px] rounded"
    />
  );
}

export default BASPhoto;

import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
const ConfirmArrowComponent = ({ files, setFiles }) => {
  const confirmBackButtonHandler = () => {
    Swal.fire({
      title: "Alert",
      html: `Are you sure you want to return to the Manage Asset page? You have already selected ${files?.length} files.`,
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
      confirmButtonColor: "#ff0000",
    }).then((result) => {
      if (result.isConfirmed) {
        window.history.back();
        setFiles([]);
      }
    });
  };
  return (
    <button onClick={() => confirmBackButtonHandler()}>
      <FaArrowLeft className="text-2xl hover:text-[#ff0000] hover:cursor-pointer transition-colors duration-150" />
    </button>
  );
};

ConfirmArrowComponent.propTypes = {
  files: PropTypes.array,
  setFiles: PropTypes.func,
};
export default ConfirmArrowComponent;

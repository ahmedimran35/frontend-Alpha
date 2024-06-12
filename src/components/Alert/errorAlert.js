import Swal from "sweetalert2";

export const errorAlert = (message) => {
    Swal.fire({
        title: `${message}`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0000",
      });
}
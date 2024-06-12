import Swal from "sweetalert2";

export const successAlert = (message) => {
    Swal.fire({
        title: `${message}`,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0000",
      });
}
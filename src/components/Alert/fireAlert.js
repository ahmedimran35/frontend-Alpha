import { Toast } from "../../constants/toast";

export const successFireAlert  = (title) =>  Toast.fire({
    icon: "success",
    title: `${title}`,
  });

  export const failedFireAlert = (title) =>  Toast.fire({
    icon: "error",
    title: `${title}`,
  });
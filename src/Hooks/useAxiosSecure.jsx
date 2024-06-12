import axios from "axios";

import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { errorAlert } from "../components/Alert/errorAlert";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_axiosSecure,
    withCredentials: true,
  });
  axiosSecure.defaults.headers.post["Content-Type"] = "application/json";
  axiosSecure.defaults.headers["Accept"] = "application/json";
  axiosSecure.timeout = 60000;

  const logOut = () => {
    return signOut(auth);
  };

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const errorResponse = error?.response?.data;

      const responseObject = {
        statusCode: error?.response?.status || 500,
        message: errorResponse?.message || "Something went wrong",
        errorMessages:
          errorResponse?.errorMessages || "No detailed error messages provided",
      };

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        logOut()
          .then(() => {
            errorAlert(error?.response?.data);
          })
          .catch(() => {
            errorAlert("Failed to log out after token verification failed");
          });
      }

      return Promise.reject(responseObject);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;

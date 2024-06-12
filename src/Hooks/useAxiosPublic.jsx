import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_axiosPublic,
    // withCredentials: true,
  });
  axiosPublic.defaults.headers.post["Content-Type"] = "application/json";
  axiosPublic.defaults.headers["Accept"] = "application/json";
  axiosPublic.timeout = 60000;
  axiosPublic.interceptors.response.use(
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

      return Promise.reject(responseObject);
    }
  );
  return axiosPublic;
};

export default useAxiosPublic;

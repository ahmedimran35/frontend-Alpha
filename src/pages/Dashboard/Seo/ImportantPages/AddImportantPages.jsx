import { Helmet } from "react-helmet-async";
import H2Title from "../../../../components/Titles/H2Title";
import PrimaryButtonSmaill from "../../../../components/buttons/PrimaryButtonSmall/PrimaryButtonSmaill";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import BackArrowComponent from "../../../../components/BackArrowComponent/BackArrowComponent";
import { importantPageRootURL } from "../../../../utils/Constants/decryptedApiConstants/apiURL";

const AddImportantPages = () => {
  // const { user } = useAuth();
  // const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const formControlInput = {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": { borderColor: "red" },
      "&.Mui-focused fieldset": { borderColor: "red", border: "1px solid red" },
    },
  };
  const inputLabel = {
    "&.Mui-focused": { color: "red" },
  };

  const [pageInfo, setPageInfo] = useState("");
  const [selectedPageCategory, setSelectedPageCategory] = useState("");

  const staticPageCategory = [
    { pageName: "Information" },
    { pageName: "Legal" },
    { pageName: "Support" },
  ];
  const handlePageCategoryChange = (e) => {
    const selectedPageCategory = e.target.value;
    setSelectedPageCategory(selectedPageCategory);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const pageName = data.pageName;
    const pageCategory = selectedPageCategory;
    const pageContent = pageInfo;
    const payload = {
      pageName,
      category: pageCategory,
      content: pageContent,
    };

    try {
      const result = await axiosSecure.post(
        `/${importantPageRootURL}`,
        payload
      );
      if (result?.data?.success) {
        reset();
        Swal.fire({
          title: `${result?.data?.message}`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#ff0000",
        });
      } else {
        reset();
        Swal.fire({
          title: `${result?.data?.message}`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#ff0000",
        });
      }
    } catch (error) {
      reset();
      Swal.fire({
        title: `${error?.response?.data?.message}`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0000",
      });
    }

    setLoading(false);
  };
  return (
    <div className="rounded-lg my-10 flex flex-col items-center justify-center space-y-5">
      <Helmet>
        <title>Add Software & Tools</title>
      </Helmet>

      <div className="flex justify-start my-5  max-w-3xl mx-auto w-full">
        <BackArrowComponent />
      </div>
      <H2Title baseText={"Add"} coloredText={"Important Pages"}></H2Title>

      {/* ------------------------------------- */}
      <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pt-5 pb-10">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto">
          <div className="w-full flex flex-col md:flex-row gap-3 px-2 mb-6">
            <div className="flex-1 relative">
              {/* page name  */}
              <TextField
                size="small"
                className="w-full customTextField"
                {...register("pageName", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z\s]+$/g,
                    message: "Invalid Page Name Format",
                  },
                })}
                id="outlined-basic"
                label="Page Name"
                variant="outlined"
                sx={{
                  fieldset: { borderColor: "#cbd5e1" },
                }}
              />
              {errors.pageName && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                  {errors.pageName.message}
                </span>
              )}
            </div>

            <div className="w-full relative flex-1">
              <FormControl
                className="w-full"
                size="small"
                sx={formControlInput}
              >
                <InputLabel sx={inputLabel} id="demo-select-small-label">
                  Page Category
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  className="w-full customSelect"
                  required
                  label="Page Category"
                  value={selectedPageCategory}
                  onChange={handlePageCategoryChange}
                  sx={{
                    fieldset: { borderColor: "#cbd5e1" },
                  }}
                >
                  {staticPageCategory?.map((dynamicPageCategory, index) => (
                    <MenuItem key={index} value={dynamicPageCategory?.pageName}>
                      {dynamicPageCategory.pageName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="w-[98%] mx-auto">
            <ReactQuill theme="snow" value={pageInfo} onChange={setPageInfo} />
          </div>
          {/* <div className="blog-post">{parse(pageInfo)}</div> */}
          <div className="flex items-center justify-center mt-5">
            <PrimaryButtonSmaill
              type="submit"
              text={loading ? "Uploading..." : "Upload"}
            />
          </div>
        </form>

        {/* ------------ */}
      </div>
    </div>
  );
};

export default AddImportantPages;

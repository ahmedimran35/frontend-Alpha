import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import H2Title from "../../../../components/Titles/H2Title";
import Loading from "../../../../components/isLoading/Loading";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useState } from "react";
import ReactQuill from "react-quill";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PrimaryButtonSmaill from "../../../../components/buttons/PrimaryButtonSmall/PrimaryButtonSmaill";
import Swal from "sweetalert2";
import BackArrowComponent from "../../../../components/BackArrowComponent/BackArrowComponent";
import { importantPageRootURL } from "../../../../utils/Constants/decryptedApiConstants/apiURL";
const UpdateImportantPage = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [selectedPageCategory, setSelectedPageCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [detailsContent, setDetailsContent] = useState("");
  const navigate = useNavigate();
  const handlePageCategoryChange = (e) => {
    const selectedPageCategory = e.target.value;
    setSelectedPageCategory(selectedPageCategory);
  };
  const formControlInput = {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": { borderColor: "red" },
      "&.Mui-focused fieldset": { borderColor: "red", border: "1px solid red" },
    },
  };
  const inputLabel = {
    "&.Mui-focused": { color: "red" },
  };

  const staticPageCategory = [
    { pageName: "Information" },
    { pageName: "Legal" },
    { pageName: "Support" },
  ];

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await axiosPublic.get(`${importantPageRootURL}/${id}`);
      const data = res?.data?.data;
      setDetailsContent(data?.content || "");

      return {
        pageName: data?.pageName,
        category: data?.category,
      };
    },
  });

  const {
    // eslint-disable-next-line no-unused-vars
    data: importantPageDetails = {},
    isLoading,
    isPending,
  } = useQuery({
    queryKey: [id, "update-important-page"],
    queryFn: async () => {
      const res = await axiosPublic.get(`${importantPageRootURL}/${id}`);

      setSelectedPageCategory(res?.data?.data?.category);
      return res?.data?.data;
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const pageName = data.pageName;
      const content = detailsContent;
      const category = selectedPageCategory;
      const payload = {
        pageName,
        content,
        category,
      };
      const result = await axiosPublic.patch(
        `${importantPageRootURL}/${id}`,
        payload
      );
      if (result?.data?.success) {
        setLoading(false);
        Swal.fire({
          title: `${result?.data?.message}`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#ff0000",
        });
        navigate(
          "/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/dd6c71448dfe05bfa1c2bbd71cab1db5cdc1292615133c8adb6d988e2bc138d4"
        );
      } else {
        Swal.fire({
          title: `Something Went Wrong.`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#ff0000",
        });
      }
    } catch (error) {
      Swal.fire({
        title: `Something Went Wrong.`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0000",
      });
    }
  };

  // const defaultDescription = "h2>headu</h2><p>judhdhdjyh</p><p><br></p><p>ki<strong>chu</strong></p>"; // Set your desired default text here
  if (isLoading || isPending) return <Loading isLoading={true} />;

  return (
    <div className=" rounded-lg flex flex-col items-center justify-center space-y-10 mt-20">
      <Helmet>
        <title>Update Important Page</title>
      </Helmet>
      <div className="flex justify-start my-5  md:mt-20 lg:mt-0 max-w-3xl mx-auto w-full">
        <BackArrowComponent />
      </div>
      <H2Title baseText={"Update"} coloredText={"Important Page"} />

      {/* ---------------------------- */}
      <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pt-5 pb-14 ">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto">
          <div className="w-full flex flex-col md:flex-row md:mb-6 gap-3 px-2">
            <div className=" w-full space-y-5">
              <div className="flex flex-col md:flex-row gap-3 px-2 mb-6">
                <div className="flex-1 relative">
                  {/* page name  */}
                  <TextField
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    className="w-full customTextField"
                    {...register("pageName", {
                      required: false,
                      pattern: {
                        value: /^[a-zA-Z\s]+$/g,
                        message: "Invalid Page Name Format",
                      },
                    })}
                    inputProps={{ readOnly: true }}
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
                      InputLabelProps={{ shrink: true }}
                      label="Page Category"
                      value={selectedPageCategory}
                      onChange={handlePageCategoryChange}
                      sx={{
                        fieldset: { borderColor: "#cbd5e1" },
                      }}
                    >
                      {staticPageCategory?.map((dynamicPageCategory, index) => (
                        <MenuItem
                          key={index}
                          value={dynamicPageCategory?.pageName}
                        >
                          {dynamicPageCategory.pageName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="w-[98%] mx-auto">
                <ReactQuill
                  theme="snow"
                  //   defaultValue={softwareDetails?.briefDescription}
                  value={detailsContent}
                  onChange={setDetailsContent}
                />
              </div>
              {/* <div className="blog-post">{parse(detailsContent)}</div> */}
              <div className="flex items-center justify-center mt-10">
                <PrimaryButtonSmaill
                  type="submit"
                  text={loading ? "Processing..." : "Update"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateImportantPage;

import { Helmet } from "react-helmet-async";
import H2Title from "../../../components/Titles/H2Title";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import PrimaryButtonSmaill from "../../../components/buttons/PrimaryButtonSmall/PrimaryButtonSmaill";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/isLoading/Loading";
import ReactQuill from "react-quill";
import "./styles/quill.snow.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import RegularInputField from "../../../components/InputFields/RegularInputField/RegularInputField";
import "./border.css";
import DescriptionInputField from "../../../components/InputFields/DescriptionInputField/DescriptionInputField";
import InputFileField from "../../../components/InputFields/InputFileField/InputFileField";
import BackArrowComponent from "../../../components/BackArrowComponent/BackArrowComponent";
import {
  dashboard,
  manageSoftwareAndTools,
} from "../../../utils/Constants/decryptedApiConstants/dashboardURL";
import { updateSoftwaresAndToolsApiCall } from "../../../utils/APIs/UpdateSoftwareAndToolsApis/UpdateSoftwareAndToolsApis";
import { softwareAndToolsRootURL } from "../../../utils/Constants/decryptedApiConstants/apiURL";
import { successFireAlert } from "../../../components/Alert/fireAlert";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const UpdateSoftwareAndTools = () => {
  const { user } = useAuth();
  const { toolsId } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [fetchCategory, setFetchedCategory] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [subCategory, setSubCategory] = useState([]);
  const [pricing, setPricing] = useState("");
  const pricingArray = ["Free", "Freemium", "Paid"];
  // react quill
  const [briefDescription, setBriefDescription] = useState("");
  const navigate = useNavigate();
  const formControlInput = {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": { borderColor: "red" },
      "&.Mui-focused fieldset": { borderColor: "red", border: "1px solid red" },
    },
  };
  const inputLabel = {
    "&.Mui-focused": { color: "red" },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await axiosPublic.get(
        `/${softwareAndToolsRootURL}/details-by-seo/${toolsId}`
      );
      const data = res?.data?.data;
      setBriefDescription(data?.briefDescription || "");

      return {
        title: data?.title,
        metaTitle: data?.metaTitle,
        category: data?.category,
        description: data?.description,
        metaDescription: data?.metaDescription,
        pricing: data?.pricing,
        affiliateURL: data?.affiliateURL,
        regularPrice: data?.regularPrice,
        discountPrice: data?.discountPrice,
      };
    },
  });
  const {
    data: softwareDetails = {},
    isLoading,
    isPending,
  } = useQuery({
    queryKey: [toolsId, "update-software-and-tools"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/${softwareAndToolsRootURL}/details-by-seo/${toolsId}`
      );

      // setFetchedCategory(res?.data?.data?.subCategories);
      return res?.data?.data;
    },
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubCategory(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    fetch("/softwareAndtoolsCategory.json").then((res) =>
      res.json().then((json) => setFetchedCategory(json))
    );
  }, []);

  // Event handler for category selection
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };
  // Event handler for subcategory selection
  const handlePricingChange = (event) => {
    const pricingCategory = event.target.value;
    setPricing(pricingCategory);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const title = data.title;
    const metaTitle = data.metaTitle;
    const description = data.description;
    const metaDescription = data.metaDescription;
    const choosenFile = data.choosenFile;
    const regularPrice = data.regularPrice;
    const discountPrice = data.discountPrice;
    const affiliateURL = data.affiliateURL;
    let payload = {};
    if (pricing == "Free") {
      payload = {
        title,
        metaTitle,
        description,
        metaDescription,
        pricing: pricing ? pricing : softwareDetails?.pricing,
        category: category ? category : softwareDetails?.category,
        affiliateURL,
        subCategories: subCategory.length
          ? subCategory
          : softwareDetails?.subCategories,
        uploadedUserEmail: user?.email,
        public_id: softwareDetails?.public_id,
        briefDescription: briefDescription || "",
      };
    } else {
      payload = {
        title,
        metaTitle,
        description,
        metaDescription,
        pricing: pricing ? pricing : softwareDetails?.pricing,
        category: category ? category : softwareDetails?.category,
        affiliateURL,
        subCategories: subCategory.length
          ? subCategory
          : softwareDetails?.subCategories,
        regularPrice: regularPrice
          ? parseInt(regularPrice)
          : softwareDetails?.regularPrice,
        discountPrice,
        uploadedUserEmail: user?.email,
        public_id: softwareDetails?.public_id,
        briefDescription: briefDescription || "",
      };
    }

    const assestData = JSON.stringify(payload);
    const formData = new FormData();
    formData.append("file", choosenFile[0]);
    formData.append("data", assestData);
    const apiData = await updateSoftwaresAndToolsApiCall(
      axiosSecure,
      formData,
      toolsId
    );

    if (apiData?.success) {
      setLoading(false);
      reset();
      successFireAlert(`${apiData?.data?.title}`);
      navigate(`/${dashboard}/${manageSoftwareAndTools}`);
    }
    /* try {
      axiosSecure
        .patch(
          `${
            import.meta.env.VITE_axiosPublic
          }/${softwareAndToolsRootURL}/${toolsId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          setLoading(false);
          reset();
          if (response.data.success) {
            Swal.fire({
              title: `${response?.data?.message}`,
              icon: "success",
              confirmButtonText: "OK",
              confirmButtonColor: "#ff0000",
            });
            navigate(`/${dashboard}/${manageSoftwareAndTools}`);
          }
        })
        .catch(() => {
          reset();
          setLoading(false);
          Swal.fire({
            title: ` Something Went Wrong.`,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#ff0000",
          });
        });
    } catch (error) {
      setLoading(false);
      reset();
      errorAlert("Update software failed");
    } */
  };

  if (isLoading || isPending) return <Loading isLoading={true} />;

  return (
    <div className=" rounded-lg flex flex-col items-center justify-center space-y-10 mt-20">
      <Helmet>
        <title>Update Software & Tools</title>
      </Helmet>

      <div className="flex justify-start my-5  md:mt-20 lg:mt-0 max-w-3xl mx-auto w-full">
        <BackArrowComponent />
      </div>

      <H2Title baseText={"Update"} coloredText={"Software & Tools"}></H2Title>

      <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pt-5 pb-14 ">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto">
          <div className="w-full flex flex-col md:flex-row md:mb-6 gap-3 px-2">
            {/* asset title-------------- */}
            <div className="w-full relative flex-1">
              {/* asset title */}
              <RegularInputField
                register={register}
                title={`title`}
                label={`Title`}
                type={"text"}
                regex={/^[a-zA-Z\s,:-]+$/g}
                defaultValue={softwareDetails?.title}
              />
              {/* error message for asset title  */}
              {errors.title && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="w-full relative flex-1">
              {/* meta title */}
              <RegularInputField
                register={register}
                title={`metaTitle`}
                label={`Meta Title`}
                type={"text"}
                regex={/^[a-zA-Z\s,:-]+$/g}
                defaultValue={softwareDetails?.metaTitle}
              />
              {/* error message for meta title  */}
              {errors.metaTitle && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                  {errors.metaTitle.message}
                </span>
              )}
            </div>
          </div>

          {/* dynamic category and subcategory-------------------------- */}
          <div className="w-full flex flex-col md:flex-row gap-3 px-2 my-3">
            <div className="flex-1 w-full">
              <FormControl
                sx={formControlInput}
                className="w-full"
                size="small"
              >
                <InputLabel sx={inputLabel} id="demo-select-small-label">
                  Category
                </InputLabel>
                <Select
                  inputLableProps={{ shrink: true }}
                  autoFocus={true}
                  // size="small"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={}
                  className="w-full customTextField"
                  label="Category"
                  value={category ? category : softwareDetails?.category}
                  defaultValue={softwareDetails?.category}
                  onChange={handleCategoryChange}
                >
                  {fetchCategory?.map((dynamicCategory, index) => (
                    <MenuItem
                      key={index}
                      value={
                        dynamicCategory?.categoryLink
                          ? softwareDetails?.category
                          : dynamicCategory?.categoryLink
                      }
                    >
                      {dynamicCategory.CategoryName
                        ? softwareDetails?.category
                        : dynamicCategory.CategoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            {/* Render subcategory dropdown only when category is selected */}
            <div className="flex-1 w-full">
              <div className="flex flex-col">
                <FormControl
                  sx={formControlInput}
                  className="w-full"
                  size="small"
                >
                  <InputLabel sx={inputLabel} id="demo-multiple-name-label">
                    Subcategory
                  </InputLabel>
                  <Select
                    inputLableProps={{ shrink: true }}
                    autoFocus={true}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={subCategory}
                    onChange={handleChange}
                    input={<OutlinedInput label="Subcategory" />}
                    MenuProps={MenuProps}
                  >
                    {fetchCategory?.map(
                      (subcat) =>
                        subcat?.categoryLink ===
                          (category || softwareDetails?.category) &&
                        subcat?.subCategories?.map((dynamicSubCat, index) => (
                          <MenuItem
                            key={index}
                            value={dynamicSubCat?.subCategoryLink}
                          >
                            {dynamicSubCat?.subCategoryName}
                          </MenuItem>
                        ))
                    )}
                  </Select>
                </FormControl>
                {subCategory.length > 0 ? (
                  ""
                ) : (
                  <div className="text-xs flex flex-wrap gap-[2px] pt-[2px]">
                    Selected Sub Categories:{" "}
                    {softwareDetails?.subCategories
                      ? softwareDetails?.subCategories.map((singleSub, i) => (
                          <p
                            className="inline bg-[#ff0000] rounded p-[1px] mr-[2px] text-white"
                            key={i}
                          >
                            {singleSub}{" "}
                          </p>
                        ))
                      : ""}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative m-2 md:my-4 md:mb-6 flex flex-row justify-between">
            {/* file input----------*/}
            <InputFileField
              register={register}
              title={"choosenFile"}
              label={"File"}
              extraClass="w-fit mr-2"
            />
            {/* preview previous file image  */}
            <img
              className="w-[14%] h-14 rounded"
              src={softwareDetails?.url}
              alt="software"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:mb-6 px-2 gap-3">
            <div className="w-full relative flex-1">
              {/*affiliateURL----------- */}
              <RegularInputField
                register={register}
                title={`affiliateURL`}
                label={`Affiliate URL`}
                type={"text"}
                defaultValue={softwareDetails?.affiliateURL}
                regex={/^(?:https:\/\/)?(?:[\w-]+\.)+[A-Za-z]{2,}(?:\/[\w]+)*/g}
              />
              {/* error message for Affiliate URL  */}
              {errors.affiliateURL && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                  {errors.affiliateURL.message}
                </span>
              )}
            </div>

            {/* Pricing title ------------ */}

            <div className=" flex-1  w-full">
              <FormControl
                sx={formControlInput}
                className="w-full"
                size="small"
              >
                <InputLabel sx={inputLabel} id="demo-select-small-label">
                  Pricing
                </InputLabel>
                <Select
                  inputLableProps={{ shrink: true }}
                  // size="small"
                  autoFocus={true}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  className="w-full customTextField"
                  value={pricing ? pricing : softwareDetails?.pricing}
                  defaultValue={pricing ? pricing : softwareDetails?.pricing}
                  label="Pricing"
                  onChange={handlePricingChange}
                >
                  {pricingArray?.map((pricingValue, index) => (
                    <MenuItem
                      key={index}
                      value={
                        pricingValue ? pricingValue : softwareDetails?.pricing
                      }
                      defaultValue={
                        pricingValue ? pricingValue : softwareDetails?.pricing
                      }
                    >
                      {pricingValue ? pricingValue : softwareDetails?.pricing}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          {/* Pricing And Discount Filed--------- */}
          {((pricing || softwareDetails?.pricing) == "Paid" ||
            (pricing || softwareDetails?.pricing) == "Freemium") && (
            <div className="w-full flex flex-col md:flex-row px-2 gap-3 mt-4">
              <div className="flex-1">
                {/* regular Price--------- */}
                <RegularInputField
                  register={register}
                  title={`regularPrice`}
                  label={`Regular Price`}
                  defaultValue={softwareDetails?.regularPrice}
                  type={"number"}
                  regex={/[0-9.]/g}
                  inputProps={{
                    step: "0.01", // Set step size for decimal precision
                    min: "0", // set lower limit
                  }}
                />
                {/* error message for regular price  */}
                {errors.regularPrice && (
                  <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                    {errors.regularPrice.message}
                  </span>
                )}
              </div>

              <div className=" flex-1">
                {/* discount Price */}
                <RegularInputField
                  register={register}
                  title={`discountPrice`}
                  label={`Discount Price`}
                  defaultValue={softwareDetails?.discountPrice}
                  type={"number"}
                  regex={/[0-9.]/g}
                  inputProps={{
                    step: "0.01", // Set step size for decimal precision
                    min: "0", // set lower limit
                  }}
                />
                {/* error message for discount price  */}
                {errors.discountPrice && (
                  <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                    {errors.discountPrice.message}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="w-full flex flex-col md:flex-row">
            <div className="relative m-2 md:my-3 flex-1">
              {/* Description */}
              <DescriptionInputField
                register={register}
                title={"description"}
                label={"Description"}
                defaultValue={softwareDetails?.description}
              />
              {/* error message for description  */}
              {errors.description && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[11px] left-1">
                  {errors.description.message}
                </span>
              )}
            </div>

            {/* metaDesc */}
            <div className="relative m-2 md:my-3 flex-1">
              {/* meta Description */}
              <DescriptionInputField
                register={register}
                title={"metaDescription"}
                label={"Meta Description"}
                defaultValue={softwareDetails?.metaDescription}
              />
              {/* error message for meta description  */}
              {errors.metaDescription && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                  {errors.metaDescription.message}
                </span>
              )}
            </div>
          </div>

          <div className="w-[98%] mx-auto">
            <ReactQuill
              theme="snow"
              defaultValue={softwareDetails?.briefDescription}
              value={briefDescription}
              onChange={setBriefDescription}
            />
          </div>
          {/* <div className="blog-post">{parse(briefDescription)}</div> */}
          <div className="flex items-center justify-center mt-10">
            <PrimaryButtonSmaill
              type="submit"
              text={loading ? "Processing..." : "Update"}
            />
          </div>
        </form>

        {/* ------------ */}
      </div>
    </div>
  );
};

export default UpdateSoftwareAndTools;

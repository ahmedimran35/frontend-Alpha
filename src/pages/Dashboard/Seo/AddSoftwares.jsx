import { useState } from "react";
import H2Title from "../../../components/Titles/H2Title";
import useAuth from "../../../Hooks/useAuth";
import PrimaryButtonSmaill from "../../../components/buttons/PrimaryButtonSmall/PrimaryButtonSmaill";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import RegularInputField from "../../../components/InputFields/RegularInputField/RegularInputField";
import DescriptionInputField from "../../../components/InputFields/DescriptionInputField/DescriptionInputField";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReactQuill from "react-quill";
import "./styles/quill.snow.css";
import BackArrowComponent from "../../../components/BackArrowComponent/BackArrowComponent";
import { Helmet } from "react-helmet-async";
import {
  categoryClass,
  labelClass,
} from "../../../utils/Constants/AddAssetConstant/FormConstant";
import InputFileField from "../../../components/InputFields/InputFileField/InputFileField";
import ArrowIconSelect from "../../../components/ArrowIconSelect/ArrowIconSelect";

import { errorAlert } from "../../../components/Alert/errorAlert";
import {
  MenuProps,
  formControlInput,
  inputLabel,
  pricingArray,
  softwareAndToolsSubCategory,
} from "./constants/addSoftware.constants";
import getStyles from "./functions/getStyles";

import { addSoftwaresApiCall } from "../../../utils/APIs/AddSoftwaresApis/addSoftwaresApis";

const AddSoftwares = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const [softwareLoading, setSoftwareLoading] = useState(false);
  const [subCategory, setSubCategory] = useState([]);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  // react quill
  const [briefDescription, setBriefDescription] = useState("");
  const axiosSecure = useAxiosSecure();
  const [pricing, setPricing] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubCategory(typeof value === "string" ? value.split(",") : value);
  };

  // Event handler for subcategory selection
  const handlePricingChange = (event) => {
    const pricingCategory = event.target.value;
    setPricing(pricingCategory);
  };

  const onSubmit = async (data) => {
    setSoftwareLoading(true);
    const title = data.title;
    const metaTitle = data.metaTitle;
    const description = data.description;
    const metaDescription = data.metaDescription;
    const choosenFile = data.choosenFile;
    const regularPrice = data.regularPrice;
    const discountPrice = data.discountPrice;
    const affiliateURL = data.affiliateURL;
    const category = data.category;
    let payload = {};

    if (pricing == "Free") {
      payload = {
        title,
        metaTitle,
        description,
        metaDescription,
        pricing,
        category,
        affiliateURL,
        subCategories: subCategory,
        uploadedUserEmail: user?.email,
        briefDescription,
      };
    } else {
      payload = {
        title,
        metaTitle,
        description,
        metaDescription,
        pricing,
        category,
        affiliateURL,
        subCategories: subCategory,
        regularPrice,
        discountPrice,
        uploadedUserEmail: user?.email,
        briefDescription,
      };
    }

    const assestData = JSON.stringify(payload);
    const formData = new FormData();
    formData.append("file", choosenFile[0]);
    formData.append("data", assestData);

    try {
      await addSoftwaresApiCall(axiosSecure, formData);
      setSoftwareLoading(false);
    } catch (error) {
      errorAlert("Adding Software failed!");
      setSoftwareLoading(false);
    }
  };

  return (
    <div className="rounded-lg my-10 flex flex-col items-center justify-center space-y-5">
      <Helmet>
        <title>Add Software & Tools</title>
      </Helmet>

      <div className="flex justify-start my-5  max-w-3xl mx-auto w-full">
        <BackArrowComponent />
      </div>

      <H2Title baseText={"Add"} coloredText={"Software & Tools"}></H2Title>

      <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pt-5 pb-10">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto">
          <div className="w-full flex flex-col md:flex-row gap-3 px-2 mb-6">
            {/* asset title-------------- */}
            <div className="flex-1 relative">
              {/* asset title */}
              <RegularInputField
                register={register}
                title={`title`}
                label={`Title`}
                type={"text"}
                regex={/^[a-zA-Z\s,:-]+$/g}
              />
              {/* error message for asset title  */}
              {errors.title && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                  {errors.title.message}
                </span>
              )}
            </div>
            {/* meta title  */}
            <div className="w-full relative flex-1">
              {/* asset title */}
              <RegularInputField
                register={register}
                title={`metaTitle`}
                label={`Meta Title`}
                type={"text"}
                regex={/^[a-zA-Z\s,:-]+$/g}
              />
              {/* error message for asset title  */}
              {errors.metaTitle && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[17px] left-1">
                  {errors.metaTitle.message}
                </span>
              )}
            </div>
          </div>

          {/* dynamic category and subcategory-------------------------- */}
          {
            <div className="w-full flex flex-col md:flex-row gap-3 px-2 mb-6">
              <div className="relative m-2 md:mb-5 flex-1">
                {/* Course Category */}

                <select
                  {...register("category", { required: true })}
                  className={categoryClass}
                >
                  <option value={"tools-and-softwares"}>
                    Tools And Softwares
                  </option>
                </select>
                <label className={labelClass}>Select Category</label>
                <ArrowIconSelect />
              </div>

              {/* Render subcategory dropdown only when category is selected */}
              <div className="flex-1 w-full">
                <div className="flex flex-col">
                  <FormControl
                    className="w-full"
                    size="small"
                    sx={formControlInput}
                  >
                    <InputLabel sx={inputLabel} id="demo-select-small-label">
                      Subcategory
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      className="customSelect"
                      value={subCategory}
                      onChange={handleChange}
                      input={<OutlinedInput label="Subcategory" />}
                      MenuProps={MenuProps}
                      sx={{
                        fieldset: { borderColor: "#cbd5e1" },
                      }}
                    >
                      {softwareAndToolsSubCategory?.map(
                        (dynamicSubCat, index) => (
                          <MenuItem
                            key={index}
                            value={dynamicSubCat?.subCategoryLink}
                            style={getStyles(name, subCategory, theme)}
                          >
                            {dynamicSubCat?.subCategoryName}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          }

          <div className="w-full flex flex-col md:flex-row px-2 gap-3 mb-6">
            <div className="w-full relative flex-1">
              {/*affiliateURL----------- */}
              <RegularInputField
                register={register}
                title={`affiliateURL`}
                label={`Affiliate URL`}
                type={"text"}
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
                className="w-full"
                size="small"
                sx={formControlInput}
              >
                <InputLabel sx={inputLabel} id="demo-select-small-label">
                  Pricing
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  className="w-full customTextField"
                  value={pricing}
                  required
                  label="Pricing"
                  onChange={handlePricingChange}
                  sx={{
                    fieldset: { borderColor: "#cbd5e1" },
                  }}
                >
                  {pricingArray?.map((pricingValue, index) => (
                    <MenuItem key={index} value={pricingValue}>
                      {pricingValue}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          {/* Pricing And Discount Filed--------- */}
          {(pricing == "Paid" || pricing == "Freemium") && (
            <div className="w-full flex flex-col md:flex-row px-2 gap-3 mt-4">
              <div className=" flex-1">
                {/* regular Price--------- */}
                <RegularInputField
                  register={register}
                  title={`regularPrice`}
                  label={`Regular Price`}
                  defaultValue={""}
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
                  defaultValue={""}
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
          <div className="relative m-2 md:mt-3">
            {/* file input field ----------*/}
            <InputFileField
              register={register}
              title={"choosenFile"}
              label={"File"}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row mb-6">
            <div className="relative m-2 md:my-3 flex-1">
              {/* asset Description */}
              <DescriptionInputField
                register={register}
                title={"description"}
                label={"Asset Description"}
              />
              {/* error message for asset description */}
              {errors.description && (
                <span className="error-message text-red-500 absolute text-xs -bottom-[11px] left-1">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="relative m-2 md:my-3 flex-1">
              <DescriptionInputField
                register={register}
                title={"metaDescription"}
                label={"Meta Description"}
              />
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
              value={briefDescription}
              onChange={setBriefDescription}
            />
          </div>
          {/* <div className="blog-post">{parse(briefDescription)}</div> */}
          <div className="flex items-center justify-center mt-5">
            <PrimaryButtonSmaill
              type="submit"
              text={softwareLoading ? "Uploading...." : "Upload"}
            />
          </div>
        </form>

        {/* ------------ */}
      </div>
    </div>
  );
};

export default AddSoftwares;

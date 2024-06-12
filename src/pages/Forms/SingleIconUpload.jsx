import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { errorAlert } from "../../components/Alert/errorAlert";
import RegularInputField from "../../components/InputFields/RegularInputField/RegularInputField";
import InputFileField from "../../components/InputFields/InputFileField/InputFileField";
import {
  categoryClass,
  errorSpanClass,
} from "../../utils/Constants/AddAssetConstant/FormConstant";
import DescriptionInputField from "../../components/InputFields/DescriptionInputField/DescriptionInputField";
import InputTag from "../Dashboard/Seo/TagsInput/InputTag";
import { addIconApiCall } from "../../utils/APIs/AddIconApis/addIconApis";
import { labelClass } from "../../utils/Constants/InputFieldConstants/InputFieldConstants";
import ArrowIconSelect from "../../components/ArrowIconSelect/ArrowIconSelect";
import { RemoveSpaces } from "../../utils/removeSpaces";
import validateFile from "../../utils/Functions/ValidateFunctions/validatePreviewFile";
import UploadLoading from "../../components/isLoading/UploadLoading";
import {
  onAddTag,
  onDeleteTag,
} from "./../../utils/Functions/InputTagsFunctions/InputTagsFunctions.js";
import { iconSubCategories, iconStyle } from "./forms.contants.js";

const SingleIconUploadForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [iconLoading, setIconLoading] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsErrorMessage, setTagsErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const title = RemoveSpaces(data.title);
    const metaTitle = RemoveSpaces(data.metaTitle);
    const metaDescription = RemoveSpaces(data.metaDescription);
    const choosenFile = data.choosenFile;
    const category = RemoveSpaces(data.category);
    const subCategory = RemoveSpaces(data.subCategory);
    const alternativeText = RemoveSpaces(data.alternativeText);
    const style = RemoveSpaces(data.style);

    setTagsErrorMessage("");
    if (tags.length < 1) {
      setTagsErrorMessage("Please Input at least one tag!");
      return;
    }
    const asset = {
      title,
      metaTitle,
      metaDescription,
      alternativeText,
      category,
      subCategory,
      tags,
      style,
      uploadedUserEmail: user?.email,
    };

    // checking correct file type
    const iconFileValidate = validateFile(choosenFile, setMessage);

    // ? Valid file type - Call Backend

    if (iconFileValidate === true) {
      const assestData = JSON.stringify(asset);
      const formData = new FormData();
      formData.append("file", choosenFile[0]);
      formData.append("data", assestData);

      // function call with necessary data
      try {
        setIconLoading(true);
        await addIconApiCall(axiosSecure, formData);
        Cookies.set("selected-dashboard-tab", 0);

        history.back();
        setIconLoading(false);
      } catch (error) {
        errorAlert("Failed To Add Icon!!!");
        setIconLoading(false);
      }
      setIconLoading(false);
    }
  };

  return (
    <div className=" min-h-screen max-w-3xl mx-auto pb-10  ">
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto mt-10">
        {/* icon title and meta title  */}
        <div className="w-full relative flex flex-col gap-y-3 md:gap-y-0 mb-3 md:mb-0 md:flex-row">
          <div className="relative m-2 md:mb-5 flex-1">
            {/* Icon Title */}
            <RegularInputField
              register={register}
              title={`title`}
              label={`Title`}
              type={"text"}
              regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
              maxLength={40}
              minLength={1}
            />
            {/* error message for Icon Title */}
            {errors?.title?.message && (
              <span className={`error-message ${errorSpanClass}`}>
                {errors?.title?.message}
              </span>
            )}
          </div>

          <div className="relative m-2 md:mb-5 flex-1  ">
            {/* Icon meta title */}
            <RegularInputField
              register={register}
              title={`metaTitle`}
              label={`Meta Title`}
              type={"text"}
              regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
              maxLength={60}
              minLength={1}
            />
            {errors?.metaTitle?.message && (
              <span className={`error-message ${errorSpanClass}`}>
                {errors?.metaTitle?.message}
              </span>
            )}
          </div>
        </div>
        {/* category and sub category text  */}
        <div className="w-full relative flex flex-col gap-y-3 md:gap-y-0 mb-3 md:mb-0  md:flex-row">
          <div className="relative m-2 md:mb-5 flex-1  ">
            {/* Icon Category */}

            <select
            {...register("category", { required: true })}
            className={categoryClass}
          >
            {/* <option disabled>Select Category</option> */}
            <option value={"icon"}>Icon</option>
          </select>
          <label className={labelClass}>Category</label>
          <ArrowIconSelect />





{/* 
            <RegularInputField
              register={register}
              title={`category`}
              label={`Category`}
              defaultValue={"icon"}
              inputProps={{
                readOnly: true,
              }}
              type={"text"}
              regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
              minLength={4}
            /> */}
          </div>

          {/* sub category here  */}
          <div className="relative m-2 md:mb-5 flex-1  ">
            <select
              {...register("subCategory", { required: true })}
              className={categoryClass}
              // defaultValue={}
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
            >
              <option disabled className="text-zinc-300">
                Select Sub-Category
              </option>
              {iconSubCategories?.map((dynamicCategory, index) => (
                <option
                  key={index}
                  value={dynamicCategory?.subCategoryLink}
                  className="p-1 my-1"
                >
                  {dynamicCategory.subCategoryName}
                </option>
              ))}
            </select>
            <label className={labelClass}>Select Sub Category</label>
            <ArrowIconSelect />
          </div>
        </div>
        {/* style name and alternative text*/}
        <div className="w-full relative flex flex-col gap-y-3 md:gap-y-0 mb-3 md:mb-0  md:flex-row">
          {/* style select option  */}
          <div className="relative m-2 md:mb-5 flex-1  ">
            <select
              {...register("style", { required: true })}
              className={categoryClass}
              // defaultValue={}
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
            >
              <option disabled>Select Style</option>
              {iconStyle?.map((dynamicCategory, index) => (
                <option key={index} value={dynamicCategory?.styleLink}>
                  {dynamicCategory.styleName}
                </option>
              ))}
            </select>
            <label className={labelClass}>Select Style</label>
            <ArrowIconSelect />
          </div>

          {/* Alternative text */}
          <div className="relative m-2 md:mb-5 flex-1  mb-3">
            {/* alternative text for image */}
            <RegularInputField
              register={register}
              title={`alternativeText`}
              label={`Alternative Text`}
              type={"text"}
              regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
              maxLength={50}
              minLength={1}
            />
            {/* error message for alternative text input  */}
            {errors?.alternativeText?.message && (
              <span className={`error-message ${errorSpanClass}`}>
                {errors?.alternativeText?.message}
              </span>
            )}
          </div>
        </div>
        {/* ----------------------------- */}
        {/* input field */}
        {/* file section */}
        <div className="relative m-2 md:mb-5 ">
          {/* file input field ----------*/}
          <InputFileField
            register={register}
            title={"choosenFile"}
            label={"File"}
            accept={".png, .jpg, .jpeg, .svg, .webp"}
          />

          <span className={`error-message ${errorSpanClass}`}>
            {message ? message : errors?.choosenFile?.message}
          </span>
        </div>
        {/*Tags Input*/}
        {/* tags */}
        <div className="w-full flex flex-col md:flex-row">
          <div className="relative m-2 md:mb-6 flex-1">
            <InputTag
              onAddTag={onAddTag}
              onDeleteTag={onDeleteTag}
              defaultTags={tags}
              placeholder="Asset Tags"
              setTags={setTags}
              setTagsErrorMessage={setTagsErrorMessage}
            />
            <span className={`error-message ${errorSpanClass}`}>
              {tagsErrorMessage}
            </span>
          </div>
        </div>
        {/* meta Description */}
        <div className="w-full flex flex-col md:flex-row">
          <div className="relative m-2 md:mb-6 flex-1  mt-3">
            <DescriptionInputField
              register={register}
              title={"metaDescription"}
              label={"Meta Description"}
              maxLength={160}
            />
            {errors?.metaDescription?.message && (
              <span className={`error-message ${errorSpanClass}`}>
                {errors?.metaDescription?.message}
              </span>
            )}
          </div>
        </div>
        <div className="md:w-[750px] lg:w-[800px] mx-auto px-4">
          {/*        
            {loading && <FileUploadLoadingSpine />} */}
        </div>
        <div className="flex items-center justify-center mt-10">
          {iconLoading ? (
            <UploadLoading />
          ) : (
            <button className="inline-flex items-center justify-center w-32 h-10 bg-[#ff0000] hover:bg-white text-xs md:text-[12px] border-[1px] border-[#ff0000] lg:text-[15px] font-medium tracking-wide text-white hover:text-[#ff0000]  transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap  hover:shadow-2xl uppercase hover:cursor-pointer">
              Upload
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SingleIconUploadForm;

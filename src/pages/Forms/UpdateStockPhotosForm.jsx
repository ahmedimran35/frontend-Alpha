import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { errorAlert } from "../../components/Alert/errorAlert";
import { fileMediaUploadData } from "../../utils/Functions/Common/fileMediaUpload";
import RegularInputField from "../../components/InputFields/RegularInputField/RegularInputField";
import {
  categoryClass,
  errorSpanClass,
  labelClass,
} from "../../utils/Constants/AddAssetConstant/FormConstant";
import InputFileField from "../../components/InputFields/InputFileField/InputFileField";
import InputTag from "../Dashboard/Seo/TagsInput/InputTag";
import DescriptionInputField from "../../components/InputFields/DescriptionInputField/DescriptionInputField";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { stockPhotosSubCategory } from "./forms.contants.js";
import ArrowIconSelect from "../../components/ArrowIconSelect/ArrowIconSelect.jsx";
import { stockPhotosRootURL } from "../../utils/Constants/decryptedApiConstants/apiURL.js";
import UploadLoading from "../../components/isLoading/UploadLoading.jsx";
import {
  onAddTag,
  onDeleteTag,
} from "../../utils/Functions/InputTagsFunctions/InputTagsFunctions.js";

import Cookies from "js-cookie";
import validateFile from "../../utils/Functions/ValidateFunctions/validatePreviewFile.js";
import { updateStockPhotosApiCall } from "../../utils/APIs/AddStockPhotosApis/AddStockPhotosApis.js";
import { successAlert } from "../../components/Alert/successAlert.js";
const UpdateStockPhotosForm = ({ id }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsErrorMessage, setTagsErrorMessage] = useState("");
  const [stockPhotoLoading, setStockPhotoLoading] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      try {
        const url = `${stockPhotosRootURL}`;
        const res = await axiosSecure.get(`/${url}/details-check-by-seo/${id}`);
        const asset = res?.data?.data;
        // set asset default tags for showing in form
        const defaultTags = Object?.values(asset?.tags); // Use default if tags are missing
        setTags(defaultTags);

        const defaultImage = asset?.url;
        setImageUrl(defaultImage);

        return asset;
      } catch (error) {
        // console.log(error);
      }
    },
  });

  const onSubmit = async (data) => {
    const title = data.title;
    const metaTitle = data.metaTitle;
    const description = data.description;
    const metaDescription = data.metaDescription;
    const choosenFile = data.choosenFile;
    const category = data.category;
    const subCategory = data.subCategory;
    const alternativeText = data.alternativeText;

    setTagsErrorMessage("");
    if (tags.length < 1) {
      setTagsErrorMessage("Please Input at least one tag!");
      return;
    }
    const asset = {
      title,
      metaTitle,
      category,
      subCategory,
      description,
      metaDescription,
      alternativeText,
      tags,
      uploadedUserEmail: user?.email,
    };

    const fileValidate = validateFile(choosenFile, setMessage, true);

    if (fileValidate) {
      const fileData = await fileMediaUploadData(asset, choosenFile);

      try {
        setStockPhotoLoading(true);
        const updateInfo = await updateStockPhotosApiCall(
          axiosSecure,
          fileData,
          id
        );
        Cookies.set("selected-dashboard-tab", 2);
        if (updateInfo?.success) {
          successAlert("Stock Photo Updated Successfully!");
          setStockPhotoLoading(false);
          history.back();
        }
      } catch (error) {
        errorAlert(error?.message);
        setStockPhotoLoading(false);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto">
      {/* ---------------------title and meta title  */}
      <div className="w-full relative flex flex-col gap-y-3 md:gap-y-0 mb-3 md:mb-0 md:flex-row">
        <div className="relative m-2 md:mb-5 flex-1">
          {/* asset title */}
          <RegularInputField
            register={register}
            title={`title`}
            label={`Title`}
            type={"text"}
            regex={/^[a-zA-Z\s,:-]+$/g}
            maxLength={60}
            minLength={1}
          />
          {/* error message for asset Title */}
          {errors?.title?.message && (
            <span className={`error-message ${errorSpanClass}`}>
              {errors?.title?.message}
            </span>
          )}
        </div>

        <div className="relative m-2 md:mb-5 flex-1">
          {/* meta title */}
          <RegularInputField
            register={register}
            title={`metaTitle`}
            label={`Meta Title`}
            type={"text"}
            regex={/^[a-zA-Z\s,:-]+$/g}
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
      {/* ---------------------category and sub category  */}
      <div className="w-full relative flex flex-col gap-y-3 md:gap-y-0 mb-3 md:mb-0 md:flex-row">
        <div className="relative m-2 md:mb-5 flex-1">
          <select
            {...register("category", { required: true })}
            className={categoryClass}
            defaultValue={"stock-photos"}
          >
            <option value={"stock-photos"}>Stock Photos</option>
          </select>
          <label className={labelClass}>Category</label>
          <ArrowIconSelect />
        </div>
        {/* sub category here  */}
        <div className="relative m-2 md:mb-5 flex-1">
          <select
            {...register("subCategory", { required: true })}
            className={categoryClass}
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            <option disabled>Select Sub-Category</option>
            {stockPhotosSubCategory?.map((dynamicCategory, index) => (
              <option key={index} value={dynamicCategory?.subCategoryLink}>
                {dynamicCategory.subCategoryName}
              </option>
            ))}
          </select>
          <label className={labelClass}>Select Sub Category</label>
          <ArrowIconSelect />
        </div>
      </div>

      {/* file section */}
      <div className="relative m-2 mb-6 flex flex-row justify-between gap-1 ">
        {/* file input field ----------*/}
        <InputFileField
          register={register}
          title={"choosenFile"}
          label={"Upload File"}
          accept={".png, .jpg, .jpeg, .svg, .webp"}
        />
        <img
          src={imgUrl}
          className="w-[25%] lg:w-[15%] h-14 rounded-md"
          alt=""
        />
        <span className={`error-message ${errorSpanClass}`}>
          {message ? message : errors?.choosenFile?.message}
        </span>
      </div>

      {/* Alternative text and tags input  */}
      <div className="w-full flex flex-col md:flex-row">
        <div className="relative m-2 md:mb-6 flex-1  mb-3">
          {/* alternative text for image */}
          <RegularInputField
            register={register}
            title={`alternativeText`}
            label={`Alternative Text`}
            type={"text"}
            regex={/^[a-zA-Z\s,:-]+$/g}
            maxLength={60}
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

      {/* Description and meta description  */}
      <div className="w-full flex flex-col md:flex-row">
        <div className="relative m-2 md:mb-6 flex-1 mt-3">
          {/* asset Description */}
          <DescriptionInputField
            register={register}
            title={"description"}
            label={"Description"}
            maxLength={160}
          />
          {/* error message for asset description */}
          {errors?.description?.message && (
            <span className={`error-message ${errorSpanClass}`}>
              {errors?.description?.message}
            </span>
          )}
        </div>

        {/* meta Description */}
        <div className="relative m-2 md:mb-6 flex-1 mt-3">
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

      <div className="flex items-center justify-center mt-10">
        {stockPhotoLoading === true ? (
          <UploadLoading />
        ) : (
          <button className="inline-flex items-center justify-center w-32 h-10 bg-[#ff0000] hover:bg-white text-xs md:text-[12px] border-[1px] border-[#ff0000] lg:text-[15px] font-medium tracking-wide text-white hover:text-[#ff0000]  transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap  hover:shadow-2xl uppercase hover:cursor-pointer">
            Update
          </button>
        )}
      </div>
    </form>
  );
};

UpdateStockPhotosForm.propTypes = {
  id: PropTypes.string,
};

export default UpdateStockPhotosForm;

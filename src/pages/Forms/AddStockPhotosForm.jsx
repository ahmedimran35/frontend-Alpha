import { useState } from "react";
import { useForm } from "react-hook-form";
import RegularInputField from "../../components/InputFields/RegularInputField/RegularInputField";
import {
  categoryClass,
  errorSpanClass,
  labelClass,
} from "../../utils/Constants/AddAssetConstant/FormConstant";
import InputFileField from "../../components/InputFields/InputFileField/InputFileField";
import InputTag from "../Dashboard/Seo/TagsInput/InputTag";
import DescriptionInputField from "../../components/InputFields/DescriptionInputField/DescriptionInputField";
import PrimaryButtonSmaill from "../../components/buttons/PrimaryButtonSmall/PrimaryButtonSmaill";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { fileMediaUploadData } from "../../utils/Functions/Common/fileMediaUpload";
import { errorAlert } from "../../components/Alert/errorAlert";
import { addStockPhotosApiCall } from "../../utils/APIs/AddStockPhotosApis/AddStockPhotosApis";
import ArrowIconSelect from "../../components/ArrowIconSelect/ArrowIconSelect";
import { stockPhotosSubCategory } from "./forms.contants";
import UploadLoading from "../../components/isLoading/UploadLoading";
import {
  onAddTag,
  onDeleteTag,
} from "../../utils/Functions/InputTagsFunctions/InputTagsFunctions";

import { RemoveSpaces } from "../../utils/removeSpaces";
import Cookies from "js-cookie";
import validateFile from "../../utils/Functions/ValidateFunctions/validatePreviewFile";
const AddStockPhotosForm = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsErrorMessage, setTagsErrorMessage] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [stockPhotoLoading, setStockPhotoLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const title = RemoveSpaces(data.title);
    const metaTitle = RemoveSpaces(data.metaTitle);
    const description = RemoveSpaces(data.description);
    const metaDescription = RemoveSpaces(data.metaDescription);
    const choosenFile = data.choosenFile;
    const category = RemoveSpaces(data.category);
    const subCategory = RemoveSpaces(data.subCategory);
    const alternativeText = RemoveSpaces(data.alternativeText);

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
      metaDescription,
      alternativeText,
      description,
      tags,
      uploadedUserEmail: user?.email,
    };

    const stockPhotoFileValidate = validateFile(choosenFile, setMessage);

    if (stockPhotoFileValidate === true) {
      const fileData = await fileMediaUploadData(asset, choosenFile);

      try {
        setStockPhotoLoading(true);
        await addStockPhotosApiCall(axiosSecure, fileData);
        Cookies.set("selected-dashboard-tab", 2);

        history.back();
        setStockPhotoLoading(false);
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
            regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
            maxLength={60}
            minLength={1}
          />
          {/* error message for asset title  */}
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
      {/* ---------------------category and sub category  */}
      <div className="w-full relative flex flex-col gap-y-3 md:gap-y-0 mb-3 md:mb-0 md:flex-row">
        <div className="relative m-2 md:mb-5 flex-1">
          <select
            {...register("category", { required: true })}
            className={categoryClass}
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
      <div className="relative m-2 mb-6">
        {/* file input field ----------*/}
        <InputFileField
          register={register}
          title={"choosenFile"}
          label={"Upload File"}
          accept={".png, .jpg, .jpeg, .svg, .webp"}
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
        <div className="relative m-2 md:mb-6 flex-1  mt-3">
          {/* asset Description */}
          <DescriptionInputField
            register={register}
            title={"description"}
            label={"Description"}
            maxLength={500}
          />
          {/* error message for asset description */}
          {errors?.description?.message && (
            <span className={`error-message ${errorSpanClass}`}>
              {errors?.description?.message}
            </span>
          )}
        </div>

        {/* meta Description */}
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

      <div className="flex items-center justify-center mt-10">
        {stockPhotoLoading ? (
          <UploadLoading />
        ) : (
          <PrimaryButtonSmaill
            type="submit"
            // text={"Upload"}
            text={"Upload"}
          />
        )}
      </div>
    </form>
  );
};

export default AddStockPhotosForm;

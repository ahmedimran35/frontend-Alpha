import { useForm } from "react-hook-form";
import RegularInputField from "../../components/InputFields/RegularInputField/RegularInputField";
import {
  categoryClass,
  errorSpanClass,
  labelClass,
} from "../../utils/Constants/AddAssetConstant/FormConstant";
import { useState } from "react";
import { designTemplateSubCategory } from "../../utils/Constants/DesignTemplateConstants/DesignTemplateConstants";
import InputFileField from "../../components/InputFields/InputFileField/InputFileField";
import InputTag from "../Dashboard/Seo/TagsInput/InputTag";
import DescriptionInputField from "../../components/InputFields/DescriptionInputField/DescriptionInputField";
import { errorAlert } from "../../components/Alert/errorAlert";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { fileMediaUploadData } from "../../utils/Functions/Common/fileMediaUpload";
import { successAlert } from "../../components/Alert/successAlert";
import ArrowIconSelect from "../../components/ArrowIconSelect/ArrowIconSelect";
import { useParams } from "react-router-dom";
import { designTemplateRootURL } from "../../utils/Constants/decryptedApiConstants/apiURL";
import { updateDesignTemplateApiCall } from "../../utils/APIs/updateDesignTemplateApis/updateDesignTemplateApis";
import Cookies from "js-cookie";
import { RemoveSpaces } from "../../utils/removeSpaces";
import validateZipFile from "../../utils/Functions/ValidateFunctions/validateZipFile";
import validateFile from "../../utils/Functions/ValidateFunctions/validatePreviewFile";
import UploadLoading from "../../components/isLoading/UploadLoading";
import {
  onAddTag,
  onDeleteTag,
} from "../../utils/Functions/InputTagsFunctions/InputTagsFunctions";
const UpdateDesignTemplateForm = () => {
  const { id: assetId } = useParams();
  const [tags, setTags] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [designTemplateLoading, setDesignTemplateLoading] = useState(false);
  const { user } = useAuth();
  const [imgUrl, setImageUrl] = useState(null);
  const [messageZip, setMessageZip] = useState("");
  const [messagePrev, setMessagePrev] = useState("");
  const [tagsErrorMessage, setTagsErrorMessage] = useState("");

  // react hook form functions
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      try {
        const url = `${designTemplateRootURL}`;
        const res = await axiosSecure.get(
          `/${url}/details-check-by-seo/${assetId}`
        );
        const asset = res?.data?.data;
        // set asset default tags for showing in form
        const defaultTags = Object?.values(asset?.tags); // Use default if tags are missing
        setTags(defaultTags);

        const defaultImage = asset?.previewUrl;
        setImageUrl(defaultImage);

        return asset;
      } catch (error) {
        // console.log(error);
      }
    },
  });
  const onSubmit = async (data) => {
    const title = RemoveSpaces(data.title);
    const metaTitle = RemoveSpaces(data.metaTitle);
    const description = RemoveSpaces(data.description);
    const metaDescription = RemoveSpaces(data.metaDescription);
    const choosenFile = data.choosenFile;
    const psdPreviewFile = data?.PSDFile ?? null;
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

    // * Check If correct file type is added
    const zipFileValid = validateZipFile(
      choosenFile,
      setMessageZip,
      "zip",
      true
    );
    const previewFileValid = validateFile(psdPreviewFile, setMessagePrev, true);

    // ? Valid file type - Call Backend
    if (previewFileValid && zipFileValid) {
      const fileData = await fileMediaUploadData(
        asset,
        choosenFile,
        psdPreviewFile
      );

      try {
        //* await addDesignTemplateApiCall(axiosSecure, fileData);
        setDesignTemplateLoading(true);

        const apiCallData = await updateDesignTemplateApiCall(
          axiosSecure,
          designTemplateRootURL,
          assetId,
          fileData
        );
        Cookies.set("selected-dashboard-tab", 1);

        if (apiCallData?.success) {
          successAlert("Design Template Updated Successfully!");
          setDesignTemplateLoading(false);
          history.back();
        }
      } catch (error) {
        errorAlert("upload failed");
        setDesignTemplateLoading(false);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full mx-auto max-w-5xl"
      >
        {/* ---------------------title and meta title  */}
        <div className="w-full relative flex flex-col md:flex-row mb-2">
          <div className="relative m-2 mb-5 flex-1 ">
            {/* asset title */}
            <RegularInputField
              register={register}
              // defaultValue={assetDetail?.title}
              title={`title`}
              label={`Title`}
              type={"text"}
              regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
              maxLength={70}
              minLength={1}
            />
            {/* error message for asset title  */}
            {errors?.title?.message && (
              <span className={`error-message ${errorSpanClass}`}>
                {errors?.title?.message}
              </span>
            )}
          </div>

          <div className="relative m-2 mb-5 flex-1 ">
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
        <div className="w-full relative flex flex-col md:flex-row mb-2">
          <div className="relative m-2 mb-5 flex-1  ">
            <select
              {...register("category", { required: true })}
              className={categoryClass}
              defaultValue={"design-template"}
            >
              <option value={"design-template"}>Design Template</option>
            </select>
            <label className={labelClass}>Category</label>
            <ArrowIconSelect />
          </div>
          {/* sub category here  */}
          <div className="relative m-2 mb-5 flex-1  ">
            <select
              {...register("subCategory", { required: true })}
              className={categoryClass}
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
            >
              <option disabled>Select Sub-Category</option>
              {designTemplateSubCategory?.map((dynamicCategory, index) => (
                <option key={index} value={dynamicCategory?.subCategoryLink}>
                  {dynamicCategory.subCategoryName}
                </option>
              ))}
            </select>
            <label className={labelClass}>Select Sub Category</label>
            <ArrowIconSelect />
          </div>
        </div>

        {/* file section upload original */}
        <div className="relative m-2 mb-6 flex gap-2  ">
          {/* file input field ----------*/}
          <InputFileField
            register={register}
            title={"choosenFile"}
            label={"Zip File"}
            accept={".zip"}
          />
          {/* preview previous preview image  */}
          {selectedSubCategory !== "psd" && (
            <img
              src={imgUrl}
              className="w-[25%] lg:w-[10%] h-14 rounded-md"
              alt=""
            />
          )}
          <span className={`error-message ${errorSpanClass}`}>
            {messageZip ? messageZip : errors?.choosenFile?.message}
          </span>
        </div>

        {/* update preview file  */}

        <div className="relative m-2 flex mb-6 flex-row justify-between gap-1  ">
          <InputFileField
            register={register}
            title={"PSDFile"}
            label={`Preview ${selectedSubCategory} File`}
            accept={".png, .jpg, .jpeg, .svg, .webp"}
            extraClass="w-fit mr-2"
          />
          <span className={`error-message ${errorSpanClass}`}>
            {messagePrev ? messagePrev : errors?.PSDFile?.message}
          </span>
        </div>

        {/* Alternative text and tags input  */}
        <div className="w-full flex  flex-col md:flex-row mb-2">
          <div className="relative m-2 mb-5 flex-1">
            {/* alternative text for image */}
            <RegularInputField
              register={register}
              title={`alternativeText`}
              label={`Alternative Text`}
              type={"text"}
              regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
              maxLength={50}
              minLength={1}
              // defaultValue={assetDetail?.alternativeText}
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
        <div className="w-full flex flex-col md:flex-row mb-2">
          <div className="relative m-2 mb-5 flex-1">
            {/* asset Description */}
            <DescriptionInputField
              register={register}
              title={"description"}
              label={"Asset Description"}
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
          <div className="relative m-2 mb-5 flex-1">
            <DescriptionInputField
              register={register}
              title={"metaDescription"}
              label={"Description"}
              maxLength={160}
            />
            {errors?.metaDescription?.message && (
              <span className={`error-message ${errorSpanClass}`}>
                {errors?.metaDescription?.message}
              </span>
            )}
          </div>
        </div>

        {/* submit button - update  */}
        <div className="flex items-center justify-center mt-10">
          {designTemplateLoading ? (
            <UploadLoading />
          ) : (
            <button className="inline-flex items-center justify-center w-32 h-10 bg-[#ff0000] hover:bg-white text-xs md:text-[12px] border-[1px] border-[#ff0000] lg:text-[15px] font-medium tracking-wide text-white hover:text-[#ff0000]  transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap  hover:shadow-2xl uppercase hover:cursor-pointer">
              Update
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default UpdateDesignTemplateForm;

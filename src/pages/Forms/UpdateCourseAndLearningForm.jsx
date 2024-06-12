import PropTypes from "prop-types";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { fileMediaUploadData } from "../../utils/Functions/Common/fileMediaUpload";
import { errorAlert } from "../../components/Alert/errorAlert";
import RegularInputField from "../../components/InputFields/RegularInputField/RegularInputField";
import {
  categoryClass,
  errorSpanClass,
  labelClass,
} from "../../utils/Constants/AddAssetConstant/FormConstant";
import InputFileField from "../../components/InputFields/InputFileField/InputFileField";
import InputTag from "../Dashboard/Seo/TagsInput/InputTag";
import DescriptionInputField from "../../components/InputFields/DescriptionInputField/DescriptionInputField";
import { useForm } from "react-hook-form";
import { successAlert } from "../../components/Alert/successAlert";
import ArrowIconSelect from "../../components/ArrowIconSelect/ArrowIconSelect";
import { courseSubCategories } from "./forms.contants";
import {
  onAddTag,
  onDeleteTag,
} from "../../utils/Functions/InputTagsFunctions/InputTagsFunctions";
import UploadLoading from "../../components/isLoading/UploadLoading";
import validateZipFile from "../../utils/Functions/ValidateFunctions/validateZipFile";
import validateFile from "../../utils/Functions/ValidateFunctions/validatePreviewFile";
import { RemoveSpaces } from "../../utils/removeSpaces";
import Cookies from "js-cookie";
import { updateCourseAndLearningApiCall } from "../../utils/APIs/UpdateCourseAndLearningApis/UpdateCourseAndLearningApis";
import { courseAndLearningRootURL } from "../../utils/Constants/decryptedApiConstants/apiURL";

const UpdateCourseAndLearningForm = ({ id }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [tags, setTags] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [tagsErrorMessage, setTagsErrorMessage] = useState("");
  const [messageZip, setMessageZip] = useState("");
  const [messagePrev, setMessagePrev] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const url = `${courseAndLearningRootURL}`;
      const res = await axiosSecure.get(`/${url}/details-check-by-seo/${id}`);

      const asset = res?.data?.data;

      // set asset default tags for showing in form
      const defaultTags = Object?.values(asset?.tags); // Use default if tags are missing
      setTags(defaultTags);

      const defaultImage = asset?.previewUrl;
      setImgUrl(defaultImage);

      return asset;
    },
  });

  const onSubmit = async (data) => {
    const title = RemoveSpaces(data.title);
    const metaTitle = RemoveSpaces(data.metaTitle);
    const description = RemoveSpaces(data.description);
    const metaDescription = RemoveSpaces(data.metaDescription);
    const choosenFile = data.choosenFile;
    const previewFile = data.previewFile;
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

    const type = "pdf";

    // * Check If correct file type is added
    const zipFileValid = validateZipFile(
      choosenFile,
      setMessageZip,
      type,
      true
    );
    const previewFileValid = validateFile(previewFile, setMessagePrev, true);

    if (zipFileValid && previewFileValid) {
      setCoursesLoading(true);
      const fileData = await fileMediaUploadData(
        asset,
        choosenFile,
        previewFile
      );

      try {
        const apiCallData = await updateCourseAndLearningApiCall(
          axiosSecure,
          courseAndLearningRootURL,
          id,
          fileData
        );
        Cookies.set("selected-dashboard-tab", 3);
        if (apiCallData?.success) {
          successAlert("Course Updated Successfully!");
          setCoursesLoading(false);
          history.back();
        }

       /*  axiosSecure
          .patch(
            `${
              import.meta.env.VITE_axiosPublic
            }/8bf729ffe074caee622c02928173467e658e19e28233cff8a445819e3cae4d50/${id}`,
            fileData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            if (res?.data?.success) {
              Cookies.set("selected-dashboard-tab", 3);
              successAlert("Update Successful!");
              setCoursesLoading(false);
              window.history.back();
            } else {
              setCoursesLoading(false);
            }
          })
          .catch((error) => {
            errorAlert(error?.message);
          });
        setCoursesLoading(false); */
      } catch (error) {
        errorAlert(error?.message);
        setCoursesLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto mt-10">
      {/* course title and meta title  */}
      <div className="w-full relative flex flex-col md:flex-row mb-2">
        <div className="relative m-2 mb-5  flex-1">
          {/* Course Title */}
          <RegularInputField
            register={register}
            title={`title`}
            label={`Course Title`}
            type={"text"}
            regex={/^[a-zA-Z\s,:-]+$/g}
            maxLength={60}
            minLength={1}
          />
          {/* error message for Icon Title */}
          {errors?.title?.message && (
            <span className={`error-message ${errorSpanClass}`}>
              {errors?.title?.message}
            </span>
          )}
        </div>

        <div className="relative m-2 mb-5  flex-1">
          {/* course meta title */}
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

      {/* category and sub category  */}
      <div className="w-full relative flex flex-col md:flex-row mb-2">
        <div className="relative m-2 mb-5  flex-1">
          {/* Course Category */}

          <select
            {...register("category", { required: true })}
            className={categoryClass}
          >
            <option value={"courses-and-learning"}>Courses And Learning</option>
          </select>
          <label className={labelClass}>Select Category</label>
          <ArrowIconSelect />
        </div>
        {/* sub category here  */}
        <div className="relative m-2 mb-5 flex-1">
          <select
            {...register("subCategory", { required: true })}
            className={categoryClass}
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            <option disabled>Select Sub-Category</option>
            {courseSubCategories?.map((dynamicCategory, index) => (
              <option key={index} value={dynamicCategory?.subCategoryLink}>
                {dynamicCategory.subCategoryName}
              </option>
            ))}
          </select>
          <label className={labelClass}>Select Sub Category</label>
          <ArrowIconSelect />
        </div>
      </div>
      {/* ----------------------------- */}

      {/* input field */}
      {/* PDF file section */}
      <div className="relative m-2 mb-5">
        {/* file input field ----------*/}
        <InputFileField
          register={register}
          title={"choosenFile"}
          label={"PDF/Zip File"}
          accept={".zip, .pdf"}
        />
        <span className={`error-message ${errorSpanClass}`}>
          {messageZip ? messageZip : errors?.choosenFile?.message}
        </span>
      </div>

      {/*preview file section */}
      <div className="relative m-2 mb-5 flex flex-row justify-between gap-1">
        {/* file input field ----------*/}
        <InputFileField
          register={register}
          title={"previewFile"}
          label={"Course Preview File"}
          accept={".png, .jpg, .jpeg, .svg, .webp"}
        />
        <span className={`error-message ${errorSpanClass}`}>
          {messagePrev ? messagePrev : errors?.PSDFile?.message}
        </span>
        <img
          src={imgUrl}
          className="w-[25%] lg:w-[10%] h-14 rounded-md"
          alt=""
        />
      </div>

      {/*Tags Input & Alternative text */}

      <div className="w-full relative flex flex-col md:flex-row mb-2">
        <div className="relative m-2 flex-1">
          {/* alternative text for image */}
          <RegularInputField
            register={register}
            title={`alternativeText`}
            label={`Alternative Text`}
            type={"text"}
            regex={/^(?!\s)[a-zA-Z\s,:-]+$/g}
            maxLength={60}
            minLength={1}
          />
          {/* error message for alternative text input   */}
          {errors?.alternativeText?.message && (
            <span className={`error-message ${errorSpanClass}`}>
              {errors?.alternativeText?.message}
            </span>
          )}
        </div>
      </div>
      {/* tags */}
      <div className="w-full flex flex-col md:flex-row mb-2">
        <div className="relative m-2 mb-5 flex-1">
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
      {/* Description */}
      <div className="w-full flex flex-col md:flex-row">
        <div className="relative m-2 mb-5 flex-1">
          {/* Course Description */}
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

      <div className="md:w-[750px] lg:w-[800px] mx-auto px-4">
        {/*        
      {loading && <FileUploadLoadingSpine />} */}
      </div>
      <div className="flex items-center justify-center mt-10">
        {coursesLoading ? (
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

UpdateCourseAndLearningForm.propTypes = {
  id: PropTypes.string,
};
export default UpdateCourseAndLearningForm;

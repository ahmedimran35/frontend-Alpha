import { useEffect, useState } from "react";
import useCategory from "../../../Hooks/useCategory";
import formatTextWithSpaces from "../../../utils/Functions/Common/formatTextWithSpaces";
import CategoryLoading from "../../../components/isLoading/CategoryLoading";
import useResponsiveness from "../../../Hooks/useResponsiveness";
import SubTitle from "../../../components/Titles/SubTitle";
import AssetsCount from "./ComponentsOfAllSearchCategoryResult/AssetsCount";
import DesignTemplateCard from "./ComponentsOfAllSearchCategoryResult/DesignTemplateCard";
import IconCard from "./ComponentsOfAllSearchCategoryResult/IconCard";
import StockPhotosCard from "./ComponentsOfAllSearchCategoryResult/StockPhotosCard";
import CourseCard from "./ComponentsOfAllSearchCategoryResult/CourseCard";
import ViewMoreButton from "../../../components/buttons/ViewMoreButton/ViewMoreButton";

const AllSearchCategoryResult = () => {
  const {
    categoryBasedDatas,
    isCategoryLoading,
    isCategoryFetching,
    loading,
    urlSearchTerm,
    setSearchTerm,
  } = useCategory();

  const { isLaptopView, isDesktopView2 } = useResponsiveness();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (urlSearchTerm) {
      setSearchValue(urlSearchTerm);
      setSearchTerm(urlSearchTerm);
    }
  }, [urlSearchTerm, setSearchTerm]);

  if (isCategoryFetching || isCategoryLoading || loading) {
    return <CategoryLoading />;
  }

  const { data } = categoryBasedDatas;
  const { designTemplates, icons, stockPhotos, courseAndLearnings } = data;
  const sliceDesignTemplate = designTemplates?.result?.slice(0, 8);
  const sliceIcons = icons?.result?.slice(0, 20);
  const sliceStockPhotos = stockPhotos?.result?.slice(0, 8);
  const sliceCoursesAndLearning = courseAndLearnings?.result?.slice(0, 8);

  return (
    <div>
      {/* Design Template */}
      {/*---Error Message when no assets is found  */}
      {sliceCoursesAndLearning.length === 0 &&
        sliceDesignTemplate.length === 0 &&
        sliceStockPhotos.length === 0 &&
        sliceIcons.length === 0 && (
          <div className="text-3xl mr-32 flex justify-center items-center min-h-24 text-red-500 font-semibold">
            No Assets Found!
          </div>
        )}

      {/* Error Message when no assets is found------*/}

      <div className={sliceDesignTemplate.length > 0 ? "mb-10" : ""}>
        {/* headline for design templates with assets count */}
        {sliceDesignTemplate.length === 0 ? (
          <></>
        ) : (
          <div className="ml-3 mb-5 flex items-center gap-2 justify-between md:justify-start">
            <SubTitle baseText="Design" coloredText="Templates" />
            <AssetsCount total={designTemplates?.total} />
          </div>
        )}
        {/* display design template datas  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-md">
          {/*  data of design template */}
          {Array.isArray(designTemplates?.result) &&
            sliceDesignTemplate?.map((asset) => {
              const titleSlug = formatTextWithSpaces(asset?.title);
              const titleId = `${titleSlug}-${asset?._id}`;
              return (
                <DesignTemplateCard
                  key={titleId}
                  titleId={titleId}
                  asset={asset}
                ></DesignTemplateCard>
              );
            })}
          {
            // design template view more button
            designTemplates?.result?.length >= 8 && (
              <ViewMoreButton
                url={`/category-data?category=design-template&searchTerm=${searchValue}`}
                assets={designTemplates}
              ></ViewMoreButton>
            )
          }
        </div>
      </div>
      {/* Icons */}
      <div className={sliceIcons.length > 0 ? "mb-10" : ""}>
        {sliceIcons.length === 0 ? (
          <></>
        ) : (
          <div className="ml-3 mb-5 flex items-center gap-2 justify-between md:justify-start">
            <SubTitle baseText="" coloredText="Icons" />
            <AssetsCount total={icons?.total} />
          </div>
        )}
        <div
          className={` grid ${
            isDesktopView2
              ? "grid-cols-7 gap-6 w-fit"
              : isLaptopView
              ? "grid-cols-6 gap-1"
              : "grid-cols-4 md:grid-cols-5 gap-5 md:gap-5"
          }  rounded-md   `}
        >
          {Array.isArray(icons?.result) &&
            sliceIcons?.map((asset) => {
              const titleSlug = formatTextWithSpaces(asset?.title);
              const titleId = `${titleSlug}-${asset?._id}`;
              return (
                <IconCard
                  key={titleId}
                  titleId={titleId}
                  asset={asset}
                ></IconCard>
              );
            })}
          {
            //   Icon Condition
            icons?.result?.length >= 20 && (
              <ViewMoreButton
                url={`/category-data?category=icon&searchTerm=${searchValue}`}
                assets={icons}
              ></ViewMoreButton>
            )
          }
        </div>
      </div>
      {/* Stock Photos */}
      <div className={sliceStockPhotos.length > 0 ? "mb-10" : ""}>
        {sliceStockPhotos.length === 0 ? (
          <></>
        ) : (
          <div className="ml-3 mb-5 flex items-center gap-2 justify-between md:justify-start">
            <SubTitle baseText="Stock" coloredText="Photos" />
            <AssetsCount total={stockPhotos?.total} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-md">
          {Array.isArray(stockPhotos?.result) &&
            sliceStockPhotos?.map((asset) => {
              const titleSlug = formatTextWithSpaces(asset?.title);
              const titleId = `${titleSlug}-${asset?._id}`;
              return (
                <StockPhotosCard
                  key={titleId}
                  titleId={titleId}
                  asset={asset}
                ></StockPhotosCard>
              );
            })}
          {
            // design template view more button
            stockPhotos?.result?.length >= 8 && (
              <ViewMoreButton
                url={`/category-data?category=stock-photos&searchTerm=${searchValue}`}
                assets={stockPhotos}
              ></ViewMoreButton>
            )
          }
        </div>
      </div>
      {/* Courses and Learning */}
      <div>
        {sliceCoursesAndLearning.length === 0 ? (
          <></>
        ) : (
          <div className="ml-3 mb-5 flex items-center gap-2 justify-between md:justify-start">
            <SubTitle baseText="Courses &" coloredText="Learnings" />
            <AssetsCount total={courseAndLearnings?.total} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-md">
          {Array.isArray(courseAndLearnings?.result) &&
            sliceCoursesAndLearning?.map((asset) => {
              const titleSlug = formatTextWithSpaces(asset?.title);
              const titleId = `${titleSlug}-${asset?._id}`;
              return (
                <CourseCard
                  key={titleId}
                  titleId={titleId}
                  asset={asset}
                ></CourseCard>
              );
            })}
          {
            // design template view more button
            courseAndLearnings?.result?.length >= 8 && (
              <ViewMoreButton
                url={`/category-data?category=courses-and-learning&searchTerm=${searchValue}`}
                assets={courseAndLearnings}
              ></ViewMoreButton>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default AllSearchCategoryResult;
